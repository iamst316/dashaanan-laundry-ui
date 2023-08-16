import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import "../css/Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/slices/userSlice";
import { setUser } from "../redux/slices/userSlice";

import axios from "axios";

export default function() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [stores, setStore] = useState([]);
    const loggedInUser = useSelector((state) => state.user);
    const [selectedStore, setSelected] = useState({ delivery_charges: 0 });
    const [finalOrder, setFinalOrder] = useState({});
    const [subtotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const addresses = useSelector((state) => state.user.addresses)
    const current = useSelector(state=>state.order)
    

    console.log(current)
    console.log("final: ",finalOrder)

    useEffect(() => {
        fetch("http://localhost:4000/store")
            .then((res) => res.json())
            .then((data) => {
                setStore(data);
            });
        let sum = 0;
        for (let i of current.currentOrder) {
            sum += i.total;
        }
        setSubTotal(sum);
    }, []);

    useEffect(() => {
        let total = subtotal + selectedStore.delivery_charges;
        setGrandTotal(total);
        finalOrder.store = selectedStore;
        finalOrder.billAmt = total;
        finalOrder.items = current.currentOrder;
        console.log(addresses)
    }, [selectedStore]);
    
    function OrderFinally(e){
        e.preventDefault();
        finalOrder.email = loggedInUser.email;
        finalOrder.orderStatus = "Not Delivered";
        finalOrder.orderDate = new Date();
        
        const apiUrl = 'http://localhost:4000/order';

        axios.patch(apiUrl, finalOrder, { withCredentials: true })
            .then(response => {
                dispatch(setUser(response.data.user));
                console.log("res--->",response)
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        navigate("/orders")
    }

    return (
        <>
            <Navbar />
            <SideNav />
            <div id="checkout-main">
                <p id="checkout-title">Checkout</p>
                <div id="checkout-area">
                    <select
                        onChange={(e) => {
                            setSelected(stores[e.target.value]);
                            
                        }}
                    >
                        <option disabled selected value>
                            -- Select a Store --
                        </option>
                        {stores.map((store, idx) => {
                            return <option value={idx}>{store.storeName}</option>;
                        })}
                    </select>
                    <h3 id="sub-title">Order Details</h3>
                    <div id="order-details">
                        <div id="detail-title-row">
                            <div>Item Name</div>
                            <div>Wash Types</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Final Price</div>
                        </div>
                        {current.currentOrder.map((row) => {
                            return (
                                <div id="row">
                                    <p id="item-name">{row.name}</p>
                                    <div id="wash-options">
                                        {row.addOn[0] && <p>Washing </p>}
                                        {row.addOn[1] && <p>Ironing </p>}
                                        {row.addOn[2] && <p>Bleaching </p>}
                                        {row.addOn[3] && <p>Crisp Fold</p>}
                                    </div>
                                    <p id="price">{row.price}</p>
                                    <p id="quantity">{row.quantity}</p>
                                    <p id="total">{row.total}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div id="sub">

                        <h3 id="subtotal">Subtotal:</h3>
                        <p id="subtotal-value">Rs. {subtotal}</p>
                    </div>

                    <div id="del">
                        <h3 id="delivery">Delivery Charges:</h3>
                        <p id="delivery-value">Rs. {selectedStore.delivery_charges}</p>
                    </div>
                    <div id="grand">
                        <h3 id="grand-total">
                            Grand Total:
                        </h3><p id="grand-value">Rs. {grandTotal}</p></div>

                    <div id="address">
                        <h2>Choose An Address</h2>
                        {addresses.map((entry) => {
                            return <button onClick={()=>{
                                finalOrder.deliveryAddress = entry;
                                console.log(finalOrder);
                            }} >{entry.address}</button>
                        })}
                        {/* add addresses here */}
                        <button onClick={() => navigate("/add-address")}>+</button>
                    </div>
                    <button onClick={OrderFinally}>Pay</button>
                </div>
            </div >
            <Footer />
        </>
    );
}
