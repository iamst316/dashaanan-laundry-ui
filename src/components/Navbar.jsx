import { useEffect, useState } from 'react';
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        setAuth(auth => localStorage.getItem("token"));
    }, [])

    return (<div id='navbar-main'>
        <div onClick={() => navigate("/")} id="home-tab">Home</div>
        <div onClick={() => navigate("/careers")} id="career-tab">Careers</div>
        {auth != undefined ?

            <div onClick={() => navigate("/profile")}>Profile</div> :

            <div onClick={() => navigate("/login")} id="login-tab">Login</div>
        }
    </div>)
}
