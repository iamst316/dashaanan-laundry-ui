import {useNavigate} from 'react-router-dom'
import './AdminHome.css'
import { useState } from 'react'

export default function(){
    const [admin, setAdmin] = useState({})
    const navigate = useNavigate();
    function AddAProduct(){
        navigate("/add-product")
    }
    function AddAStore(){
        navigate("/add-store")
        
    }

    function AddJob(){
        navigate("/add-job")
    }
    return(
        <div id="admin-home-page">
            <p id="admin-title">Welcome {admin.name}!</p>
            <button onClick={AddAProduct}>Add A Product</button>
            <button onClick={AddAStore}>Add A Delivery Store</button>
            <button onClick={AddJob}>Add A Job Opening</button>
        </div>
    )
}