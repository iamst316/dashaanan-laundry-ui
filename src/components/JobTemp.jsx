import { useState } from 'react';
import '../css/JobTemp.css'

export default function(props){
    const { title, location, closed, pay, department } = props.job;
    const [status, isStatus] = useState();

    return (<div className="job-card">
        <div className='job-title'>{title}</div>
        <div className='job-loc'>{location}</div>
    </div>)
}