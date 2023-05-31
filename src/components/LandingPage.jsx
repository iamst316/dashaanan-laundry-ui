import '../css/LandingPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default function(){

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
            <button id="join-btn">Login</button>
            <button id="join-btn">Register</button>
        </div>
        <Footer />
    </div>)
}