import './AddJob.css'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios";

export default function(){
    const navigate = useNavigate()
    const [newJob, setJob]= useState({})

    function AddJob(e){
        e.preventDefault();
        
        const apiUrl = 'https://dashaanan-laundry-server.onrender.com/add-job';

        axios.post(apiUrl, newJob, { withCredentials: true })
            .then(response => {
                console.log('Response:', response);
            })
            .catch(error => {
                console.error('Error:', error.message);
            }
        );

        navigate("/admin-home")
    }

    return (
        <div id="add-p-main">
            <input type="text" placeholder="Job Title" onChange={(e)=>newJob.title=e.target.value} />

            <input type="text" placeholder="Concerned Department" onChange={(e)=>newJob.department=e.target.value} />

            <input type="text" placeholder="Enter Job Location" onChange={(e)=>newJob.location=e.target.value} />

            <input type="number" placeholder="Enter Pay" onChange={(e)=> newJob.pay=e.target.value} />
            
            <button onClick={AddJob}>Add Job</button>
        </div>
    )
}