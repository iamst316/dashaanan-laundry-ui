import Footer from "./Footer"
import Navbar from "./Navbar"
import SideNav from "./SideNav"
import "../css/Profile.css"
import { useDispatch, useSelector } from "react-redux";
import ProfileData from "./ProfileData";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = 30 * 60 * 1000;

    const timer = setTimeout(() => {
      localStorage.removeItem("token")
      console.log('Item removed from localStorage.');
      navigate("/login");
    }, interval);

    return clearTimeout(timer);
  }, []);

  const loggedInUser = useSelector((state) => state.user);
  // console.log("IN Profile-->", loggedInUser);

  return (
    <div className="profile-main">
      {loggedInUser ? (
        <ProfileData user={loggedInUser} />
      ) : (
        <div>
          <h2 class="missing-info">Please log in to view your profile.</h2>
        </div>
      )
      }
    </div >
  );
};

export default Profile
