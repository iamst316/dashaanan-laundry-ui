import '../css/Footer.css'
import {useNavigate} from 'react-router-dom'

export default function(){
    const navigate = useNavigate()
    return (
        <div id="footer-main">
            <h1 id="footer-title">Copyright 2023</h1>
            github link here
            <button onClick={()=>navigate("/admin-login")}>Admin Login</button>
        </div>
    )
}