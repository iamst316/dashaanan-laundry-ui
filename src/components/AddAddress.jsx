import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import '../css/AddAddress.css'
import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate()
    const [addForm,addressForm] = useState({})
    function AddNew(){
        //add to userModel Entry via fetch post
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
            <input type="text" placeholder="State" onChange={(e)=> addForm.state=e.target.value} />
            <button onClick={AddNew} id="register-btn">Add New Address</button>
            
        </div>
        <Footer />
    </>)
}