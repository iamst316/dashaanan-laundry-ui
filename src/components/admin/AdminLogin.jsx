import {useNavigate} from 'react-router-dom'
import './AdminLogin.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';


export default function(){
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({});

    function HandleLogin(){
        const apiUrl = 'http://localhost:4000/admin-login';

        axios.post(apiUrl, loginForm, { withCredentials: true })
            .then(response => {
                console.log('Response:', response);
                const myCookieValue = Cookies.get("token");
                localStorage.setItem("token", myCookieValue);
                // console.log('COOKIE--->', localStorage.getItem("token"))
                // User.email = response.data.user.email;
                // User.name = response.data.user.name;
                // User.addresses = response.data.user.addresses;
                // User.orders = response.data.user.orders;

                // console.log(response.data.user);
                // console.log("I LOGGED IN -->  ", User);

                // dispatch(setUser(User));
                // console.log("1",loggedInUser);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate("/admin-home")
    }
    // useEffect(() => {
    //     console.log("1", User);
    // }, [User])

    return(
        <div id="admin-main">
            <input type="text" onChange={(e)=> loginForm.codeName = e.target.value} placeholder='Admin Code Name'/>
            <input type="password" onChange={(e)=> loginForm.password = e.target.value} placeholder='Admin Password'/>
            <button id='admin-btn-login' onClick={HandleLogin}>Admin Login</button>
        </div>
    )
}