import Navbar from "./Navbar"
import '../css/Register.css'
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

        <div id="register-main">
            <div id="register-area">
                <h1 id="login-title">Welcome Grasshopper!</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="E-Mail" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <button id="register-btn">Register</button>
                    {/* <hr /> */}
                </form>
                <h4>Already a member? <button onClick={()=> navigate("/login")}>Login</button></h4>

            </div>

        </div>
        <div id='register-footer'><Footer /></div>
    </div>)
}
