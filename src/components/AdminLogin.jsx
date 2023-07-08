import {useNavigate} from 'react-router-dom'
import '../css/AdminLogin.css'

export default function(){
    const navigate = useNavigate();

    function HandleLogin(){
        navigate("/admin-home")
    }

    return(
        <div id="admin-main">
            <input type="text" placeholder='Admin Code Name'/>
            <input type="password" placeholder='Admin Password'/>
            <button id='admin-btn-login' onClick={HandleLogin}>Admin Login</button>
        </div>
    )
}