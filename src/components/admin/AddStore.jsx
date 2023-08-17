import { useEffect, useState } from 'react';
import './AddStore.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function(){ 
    const navigate = useNavigate()
    const [newStore, setStore]= useState({})

    function AddStore(e){
        e.preventDefault()
        
        const apiUrl = 'http://localhost:4000/add-store';

        axios.post(apiUrl, newStore, { withCredentials: true })
            .then(response => {
                console.log('Response:', response);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate("/admin-home")
    }
    return(
        <div id="add-s-main">
            <input type="text" placeholder="Store Name" onChange={(e)=>newStore.storeName=e.target.value} />
            <input type="text" placeholder="Store Description" onChange={(e)=>newStore.label=e.target.value} />
            <input type="text" placeholder="Store Address" onChange={(e)=>newStore.address=e.target.value} />
            <input type="number" placeholder="Enter Store Contact Number" onChange={(e)=>newStore.telephone=e.target.value} />
            <input type="number" placeholder="Enter Store Delivery Charges" onChange={(e)=>newStore.delivery_charges=e.target.value} />
            <button onClick={AddStore}>Add Store</button>
        </div>
    )
}