import { useState } from 'react';
import '../css/JobTemp.css'
import plogo from '../assets/img/money.png'

export default function(props) {
    const { title, location, closed, pay, department } = props.job;
    // const [status, isStatus] = useState();

    return (<div className='bg'><div className="job-card">
        <div className='job-desc'>
            <div className='job-title'>{title}</div>
            <div className='dep'>{department}</div>
        </div>
        <div className="other">
            <div className='job-loc'>{location}</div>
            <div className="pay"><img src={plogo} /> <div className="amt"><em>&#8377;{pay}</em> per month.</div></div>
        </div>
        <div className='btns'>
            <button className='det-btn'>View Details</button>
            {closed
                ?
                <button disabled>Apply</button>
                :
                <button className='apply-btn'>Apply</button>
            }
        </div>
    </div></div>)
}
