import home from '../assets/img/home.png'
import add from '../assets/img/add.png'
import orders from '../assets/img/orders.png'
import '../css/Sidenav.css'
import { useNavigate } from 'react-router-dom'


export default function(){
    const navigate = useNavigate()
    return (
        <div id="side-main">
            <button onClick={()=> navigate("/")} id="side-btn"><img src={home} /></button>
            <button onClick={()=> navigate("/new-order")} id="side-btn"><img src={add} /></button>
            <button onClick={()=> navigate("/orders")} id="side-btn"><img src={orders} /></button>
        </div>
    )
}