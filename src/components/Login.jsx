import Navbar from "./Navbar"
import '../css/Login.css'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function() {
    const [loginForm,fillForm] = useState({});
    const navigate = useNavigate();
    function HandleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Authorization': "Bearer " + auth, },
            body: JSON.stringify(loginForm)
        };
        fetch('http://localhost:5000/login', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })

        navigate("/orders")
    }

    return (<div>
        <Navbar />

        <div id="login-main">
            <div id="login-area">
                <h1 id="login-title">Welcome back!</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="email" placeholder="E-Mail" onChange={(e)=> loginForm.email=e.target.value} />
                    <input type="password" placeholder="Password" onChange={(e)=> loginForm.password=e.target.value} />
                    <button onClick={HandleSubmit} id="login-btn">Login</button>
                    {/* <hr /> */}
                </form>
                <h4>Not a member? <button onClick={()=> navigate("/register")}>Register</button></h4>
                <h4>Login with google option</h4>

            </div>

        </div>
        <div id='login-footer'><Footer /></div>
    </div>)
}
