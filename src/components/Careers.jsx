import Navbar from "./Navbar"
import '../css/Careers.css'
import JobTemp from "./JobTemp"
import Footer from './Footer'
import { useEffect, useRef, useState } from "react"
// import axios from "axios";

export default function(){
    const [jobs, setJobs] = useState([]);
    const scrollRef = useRef();

    useEffect(()=>{
        fetch("https://dashaanan-laundry-server.onrender.com/jobs")
        .then((res) => res.json())
        .then((data) => {
            setJobs(data);
        });

        setTimeout(()=>{
            scrollRef.current?.scrollIntoView({behavior:"smooth"})
        },2000)
    },[])
    return (
        <div className="careers">
            <Navbar />
            <div id="careers-main">
                <h1 id="careers-title">Work with us?</h1>
                <div className="job-area">
                    <div className="sub-title">Current Openings</div>
                    <div ref={scrollRef} className="jobs">
                        {jobs.map((job)=>{
                            return <JobTemp job={job} />
                        })}
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}