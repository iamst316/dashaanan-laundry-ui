import '../css/Navbar.css'
import {useNavigate} from 'react-router-dom'

export default function(){
    const navigate = useNavigate();

    return (<div id='navbar-main'>
        <div onClick={()=>navigate("/")} id="home-tab">Home</div>
        <div onClick={()=>navigate("/careers")}  id="career-tab">Careers</div>
        <div onClick={()=>navigate("/login")}  id="login-tab">Login</div>
    </div>)
}