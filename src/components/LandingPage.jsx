import '../css/LandingPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function(){
    const navigate = useNavigate();

    return(<div id='landing-main'>
        <Navbar />
        <div id='titles'>
            <h1 id='static-title'>Welcome To</h1>
            <h1 id='dynamic-title'>Dashaanan Laundry</h1>
        </div>

        <div id="about-us">
            <h1 id="about-title">What We Do</h1>
            <h1 id="about-body">&#9679; We Wash Clothes &#9679;</h1>
            <h1 id="about-body">&#9679; We Tell Jokes &#9679;</h1>
            <h1 id="about-body">&#9679; All The Good Stuff &#9679;</h1>


        </div>
        <div id="join-main">
            <h1 id="join-title">Join Us</h1>
            <button onClick={()=>navigate("/login")} id="join-btn">Login</button>
            <button onClick={()=>navigate("/register")}  id="join-btn">Register</button>
        </div>
        <Footer />
    </div>)
}