import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import '../css/AddAddress.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import axios from 'axios';

export default function(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const loggedInUser = useSelector((state) => state.user);
    const [addForm,setAddressForm] = useState({})
    function AddNew(e){
        e.preventDefault();

        const apiUrl = 'http://localhost:4000/add-address';

        axios.patch(apiUrl, addForm, { withCredentials: true })
            .then(response => {
                // dispatch(setUser(User));
                console.log("res--->",response)
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate('/checkout')
    }
    useEffect(()=>{

    },[addForm])
    return(<>
        <Navbar />
        <SideNav />
        <div id="form-main">
            <p id="main-title">Add New Address</p>
            <input type="text" placeholder="Address" onChange={(e)=> addForm.address=e.target.value} />
            <input type="text" placeholder="City" onChange={(e)=> addForm.city=e.target.value} />
            <input type="text" placeholder="State" onChange={(e)=> addForm.stateName=e.target.value} />
            <button onClick={AddNew} id="register-btn">Add New Address</button>
            
        </div>
        <Footer />
    </>)
}