import Navbar from "./Navbar"
import '../css/Login.css'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import spinner from '../assets/img/spinner.svg';

export default function() {
    const [loginForm, fillForm] = useState({});
    const [User, setUserLogIn] = useState({});
    // const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showLoadingImg, setLoadingImage] = useState(false);

    function HandleSubmit(e) {
        e.preventDefault();
        setLoadingImage(true);

        const apiUrl = 'https://dashaanan-laundry-server.onrender.com/login';

        axios.post(apiUrl, loginForm, { withCredentials: true })
            .then(response => {
                const myCookieValue = Cookies.get("token");
                localStorage.setItem("token", myCookieValue);
                User.email = response.data.user.email;
                User.name = response.data.user.name;
                User.addresses = response.data.user.addresses;
                User.orders = response.data.user.orders;

                console.log("I LOGGED IN -->  ", User);
                dispatch(setUser(User));

                if (User.email){
                    navigate("/orders")
                }
                else{
                    alert("Plase Enter Valid Credentials.")
                }
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

    }
    useEffect(() => {
        console.log("1", User);
    }, [User])

    return (<div>
        <Navbar />

        <div id="login-main">
            <div id="login-area">
                <h1 id="login-title">Welcome back!</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="email" placeholder="E-Mail" onChange={(e) => loginForm.email = e.target.value} />
                    <input type="password" placeholder="Password" onChange={(e) => loginForm.password = e.target.value} />
                    {showLoadingImg ? <img src={spinner}/> : <button onClick={HandleSubmit} id="login-btn">Login</button>}
                    
                </form>
                <h4>Not a member? <button onClick={() => navigate("/register")}>Register</button></h4>
                <h4>Login with google option</h4>
                


            </div>

        </div>
        <div id='login-footer'><Footer /></div>
    </div>)
}
