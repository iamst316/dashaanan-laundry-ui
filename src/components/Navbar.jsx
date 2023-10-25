import { useEffect, useState } from 'react';
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token") 
        }
    }, [])

    return (<div id='navbar-main'>
        <div onClick={() => navigate("/")} className="tab">Home</div>
        <div onClick={() => navigate("/careers")} className="tab">Careers</div>
        
        {localStorage.getItem("token") != undefined ?

            <div className="tab" onClick={() => navigate("/profile")}>Profile</div> :

            <div onClick={() => navigate("/login")} className="tab">Login</div>
        }
    </div>)
}
