import '../css/LandingPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
import { useRef,useEffect } from 'react';

export default function(){
    const navigate = useNavigate();
    const staticRef = useRef();
    const dynamicRef = useRef();

    useEffect(()=>{
        gsap.from(staticRef.current,{
            x:-200,
            duration:2,
        })

        gsap.from(dynamicRef.current,{
            x:200,
            duration:1,

        })
    },[])
    return(<div id='landing-main'>
        <Navbar />
        <div id='titles'>
            <h1 ref={staticRef} id='static-title'>Welcome To</h1>

            <h1 ref={dynamicRef} id='dynamic-title'>Dashaanan Laundry</h1>
        </div>

        <div id="about-us">
            <h1 id="about-title">What We Do</h1>
            <h1 id="about-body">&#9679; We Wash Clothes &#9679;</h1>
            <h1 id="about-body">&#9679; We Tell Jokes &#9679;</h1>
            <h1 id="about-body">&#9679; All The Good Stuff &#9679;</h1>


        </div>
        <div className="join-main">
            <h1 id="join-title">Join Us</h1>
            <div>
                <button onClick={()=>navigate("/login")} className="join-btn">Login</button>
                
                <button onClick={()=>navigate("/register")} className="join-btn">Register</button>
            </div>
            
        </div>
        <Footer />
    </div>)
}