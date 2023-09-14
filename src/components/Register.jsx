import Navbar from "./Navbar"
import '../css/Register.css'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function() {
    const navigate = useNavigate()
    const [registerForm, fillForm] = useState({})
    function HandleSubmit(e) {
        e.preventDefault();
        console.log(registerForm);

        const apiUrl = 'http://localhost:4000/signup';

        axios.post(apiUrl, registerForm, { withCredentials: true })
            .then(response => {
                // console.log('Response:', response.data);
                const myCookieValue = Cookies.get("token");

                localStorage.setItem("token", myCookieValue);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate("/orders")
    }
    useEffect(() => {

    }, [registerForm])

    return (<div>
        <Navbar />

        <div id="register-main">
            <div id="register-area">
                <h1 id="login-title">Welcome Grasshopper!</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="text" placeholder="First Name" onChange={(e) => registerForm.firstname = e.target.value} />
                    <input type="text" placeholder="Last Name" onChange={(e) => registerForm.lastname = e.target.value} />
                    <input type="email" placeholder="E-Mail" onChange={(e) => registerForm.email = e.target.value} />
                    <input type="password" placeholder="Password" onChange={(e) => registerForm.password = e.target.value} />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="text" placeholder="Address" onChange={(e) => registerForm.address = e.target.value} />
                    <input type="text" placeholder="City" onChange={(e) => registerForm.city = e.target.value} />
                    <input type="text" placeholder="State" onChange={(e) => registerForm.state = e.target.value} />
                    <button onClick={HandleSubmit} className="register-btn">Register</button>
                    {/* <hr /> */}
                </form>
                <h4>Already a member? <button onClick={() => navigate("/login")}>Login</button></h4>

            </div>

        </div>
        <div id='register-footer'><Footer /></div>
    </div>)
}
