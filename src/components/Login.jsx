import Navbar from "./Navbar"
import SideDetails from './SideDetails'
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
                    <button>Login</button>
                    <hr />
                    <h4>Login with google option</h4>
                </form>
            </div>

            <SideDetails />
        </div>
        <Footer />
    </div>)
}
