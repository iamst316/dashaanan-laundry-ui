import { useEffect, useState } from 'react';
import '../css/AddStore.css';
import { useNavigate } from 'react-router-dom';

export default function(){ 
    const navigate = useNavigate()
    const [newStore, setStore]= useState({})
    useEffect(()=>{
    },[newStore])
    function AddStore(){
        // e.preventDefault()
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json','Authorization': "Bearer " + auth, },
            body: JSON.stringify(newStore)
        };
        fetch('http://localhost:5000/add-store', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })

        navigate("/admin-home")
    }
    return(
        <div id="add-s-main">
            <input type="text" placeholder="Store Name" onChange={(e)=>newStore.storeName=e.target.value} />
            <input type="text" placeholder="Store Description" onChange={(e)=>newStore.label=e.target.value} />
            <input type="text" placeholder="Store Address" onChange={(e)=>newStore.address=e.target.value} />
            <input type="number" placeholder="Enter Store Contact Number" onChange={(e)=>newStore.telephone=e.target.value} />
            <input type="number" placeholder="Enter Store Delivery Charges" onChange={(e)=>newStore.delivery_charges=e.target.value} />
            <button onClick={()=>AddStore()}>Add Store</button>
        </div>
    )
}