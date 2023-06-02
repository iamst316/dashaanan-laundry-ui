import Navbar from "./Navbar"
import SideDetails from './SideDetails'
import '../css/Login.css'


export default function(){
    function HandleSubmit(e){
        e.preventDefault();
    }

    return(<div>
        <Navbar />

        <div id="login-main">
            <div id="login-area">
                <h1 id="login-title">Welcome back</h1>
                <h1 id="login-subtitle">Please enter your details.</h1>
                <form onSubmit={()=>HandleSubmit(e)}>
                    <input type="email" placeholder="E-Mail" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <hr />
                    <h4>Login with google option</h4>
                </form>
            </div>

            <SideDetails />
        </div>
    </div>)
}