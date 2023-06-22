import Navbar from "./Navbar"
import '../css/Login.css'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";


export default function() {
    const navigate = useNavigate()
    function HandleSubmit(e) {
        e.preventDefault();
        navigate("/orders")
    }

    return (<div>
        <Navbar />

        <div id="login-main">
            <div id="login-area">
                <h1 id="login-title">Welcome back</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="email" placeholder="E-Mail" />
                    <input type="password" placeholder="Password" />
                    <button id="login-btn">Login</button>
                    {/* <hr /> */}
                </form>
                <h4>Not a member? <button onClick={()=> navigate("/register")}>Register</button></h4>
                <h4>Login with google option</h4>

            </div>

        </div>
        <div id='login-footer'><Footer /></div>
    </div>)
}
