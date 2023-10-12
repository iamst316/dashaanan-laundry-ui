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
        <div onClick={() => navigate("/")} className="tab">Home</div>
        <div onClick={() => navigate("/careers")} className="tab">Careers</div>
        {auth != undefined ?

            <div className="tab" onClick={() => navigate("/profile")}>Profile</div> :

            <div onClick={() => navigate("/login")} className="tab">Login</div>
        }
    </div>)
}
