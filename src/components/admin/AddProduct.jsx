import './AddProduct.css'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios";

export default function(){
    const navigate = useNavigate()
    const [newItem, setItem]= useState({})
    const [wash,setWash] = useState(0)
    const [iron,setIron] = useState(0)
    const [bleach,setBleach] = useState(0)
    const [towel,setTowel] = useState(0)
    useEffect(()=>{
    },[newItem])

    function AddItem(e){
        e.preventDefault();
        newItem.addOn = [
            {
                type: 'wash',
                price: wash,
                status: false
            },
            {
                type: 'iron',
                price: iron,
                status: false
            },
            {
                type: 'bleach',
                price: bleach,
                status: false
            },
            {
                type: 'towel',
                price: towel,
                status: false
            },
        ]
        
        const apiUrl = 'https://dashaanan-laundry-server.onrender.com/add-product';

        axios.post(apiUrl, newItem, { withCredentials: true })
            .then(response => {
                console.log('Response:', response);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        navigate("/admin-home")
    }

    return (
        <div id="add-p-main">
            <input type="text" placeholder="Product Name" onChange={(e)=>newItem.productName=e.target.value} />
            <input type="text" placeholder="Product Description" onChange={(e)=>newItem.description=e.target.value} />
            <input type="number" placeholder="Enter Price of the Item" onChange={(e)=>newItem.price=e.target.value} />

            <input type="number" placeholder="Enter Price of Deep Washing" onChange={(e)=>setWash(e.target.value)} />
            <input type="number" placeholder="Enter Price of Ironing" onChange={(e)=>setIron(e.target.value)} />
            <input type="number" placeholder="Enter Price of Bleaching" onChange={(e)=>setBleach(e.target.value)} />
            <input type="number" placeholder="Enter Price of Crisp Folding" onChange={(e)=>setTowel(e.target.value)} />

            <button onClick={AddItem}>Add Product</button>
        </div>
    )
}