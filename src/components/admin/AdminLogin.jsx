import {useNavigate} from 'react-router-dom'
import './AdminLogin.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';


export default function(){
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({});

    function HandleLogin(){
        const apiUrl = 'https://dashaanan-laundry-server.onrender.com/admin-login';

        axios.post(apiUrl, loginForm, { withCredentials: true })
            .then(response => {
                console.log('Response:', response);
                const myCookieValue = Cookies.get("token");
                localStorage.setItem("token", myCookieValue);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate("/admin-home")
    }

    return(
        <div id="admin-main">
            <div className="admin-login-title">
            
                <button className='go-back-btn' onClick={()=> navigate("/")}><img src="src/assets/img/left-arrow.png" /></button>

                <h1>Admin Login</h1>

            </div>
            <input type="text" onChange={(e)=> loginForm.codeName = e.target.value} placeholder='Admin Code Name'/>
            <input type="password" onChange={(e)=> loginForm.password = e.target.value} placeholder='Admin Password'/>
            <button id='admin-btn-login' onClick={HandleLogin}>Admin Login</button>
        </div>
    )
}