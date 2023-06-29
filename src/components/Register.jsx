import Navbar from "./Navbar"
import '../css/Register.css'
import Footer from './Footer'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function() {
    const navigate = useNavigate()
    const [registerForm,fillForm] = useState({})
    function HandleSubmit(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerForm)
        };
        fetch('http://localhost:5000/register', requestOptions)
            .then(response => response.json())
            console.log(registerForm)

        navigate("/orders")
    }
    useEffect(()=>{

    },[registerForm])

    return (<div>
        <Navbar />

        <div id="register-main">
            <div id="register-area">
                <h1 id="login-title">Welcome Grasshopper!</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="text" placeholder="First Name" onChange={(e)=> registerForm.firstname=e.target.value} />
                    <input type="text" placeholder="Last Name" onChange={(e)=> registerForm.lastname=e.target.value} />
                    <input type="email" placeholder="E-Mail" onChange={(e)=> registerForm.email=e.target.value} />
                    <input type="password" placeholder="Password" onChange={(e)=> registerForm.password=e.target.value} />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="text" placeholder="Address" onChange={(e)=> registerForm.address=e.target.value} />
                    <input type="text" placeholder="City" onChange={(e)=> registerForm.city=e.target.value} />
                    <input type="text" placeholder="State" onChange={(e)=> registerForm.state=e.target.value} />
                    <button onClick={HandleSubmit} id="register-btn">Register</button>
                    {/* <hr /> */}
                </form>
                <h4>Already a member? <button onClick={()=> navigate("/login")}>Login</button></h4>

            </div>

        </div>
        <div id='register-footer'><Footer /></div>
    </div>)
}
