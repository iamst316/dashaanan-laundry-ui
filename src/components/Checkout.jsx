import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import '../css/Checkout.css'

export default function(){
    const [stores, setStore]= useState([])
    const [selectedStore, setSelected] = useState({})

    useEffect(()=>{
        fetch("http://localhost:5000/store")
        .then(res=>res.json())
        .then(data=>{
          setStore(data)
        })
    },[])

    return (<>
        <Navbar />
        <SideNav />
        <div id="checkout-main">
            <p id="checkout-title">Checkout</p>
            <div id="checkout-area">
                <select onChange={(e)=>setSelected(stores[e.target.value])}>
                    {stores.map((store,idx)=>{
                        return <option value={idx}>{store.storeName}</option>
                    })}
                </select>
                <h3 id="sub-title">Order Details</h3>
                <h3 id="subtotal">Subtotal: </h3>
                <h3 id="subtotal-value">Rs. </h3>
                <h3 id="delivery">Delivery Charges: </h3>
                <h3 id="delivery-value">Rs. {selectedStore.delivery_charges}</h3>


            </div>
        </div>
        <Footer />
    </>)
}