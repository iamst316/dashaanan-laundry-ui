import '../css/Footer.css'
import {useNavigate} from 'react-router-dom'

export default function(){
    const navigate = useNavigate();
    const test="margin-top: 1.75rem;";
    
    return (
        <footer id="footer-main">
            <div>
                <h4>Abstract</h4>
                <ul type="none">
                    <li>Branches</li>
                </ul>
            </div>
            <div>
                <h4>Resources</h4>
                <ul type="none">
                    <li>Blog</li>
                    <li>Help Center</li>
                    <li>Release Notes</li>
                    <li>Status</li>
                    <li className='spc' onClick={()=>navigate("/admin-login")}>Admin Login</li>
                </ul>
            </div>
            <div>
                <h4>Community</h4>
                <ul type="none">
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Facebook</li>
                    <li>Dribbble</li>
                    <li>Podcast</li>
                    <li><a href="http://github.com/iamst316" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul type="none">
                    <li>About us</li>
                    <li>Career</li>
                    <li>Legal</li>
                    <li>iamshubham316@gmail.com</li>
                </ul>
            </div>
            <div className="end">
                <h4>&#169; Copyright 2023</h4>
                <h4>Dashaanan Studio Design, Inc.</h4>
                <h4>All rights reserved</h4>
            </div>
        </footer>
    )
}