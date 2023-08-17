import Navbar from "./Navbar"
import '../css/Careers.css'
import { useEffect, useState } from "react"
// import axios from "axios";

export default function(){
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/jobs")
        .then((res) => res.json())
        .then((data) => {
            setJobs(data);
        });
    },[])
    return (
        <>
            <Navbar />
            <div id="careers-main">
                <h1 id="careers-title">Work with us?</h1>
                <div className="jobs">
                    {jobs.map((job)=>{
                        return <h3>{job.title}</h3>
                    })}
                </div>
            </div>
        </>
    )
}