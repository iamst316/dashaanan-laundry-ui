import Footer from "./Footer"
import Navbar from "./Navbar"
import SideNav from "./SideNav"
import "../css/Profile.css"
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log("IN Profile-->", loggedInUser);
  return (
    <div>
      <Navbar />
      <SideNav />
            
      <div className="profile-main">
        {loggedInUser ? (
          <div>
            <h2>User Profile</h2>
            <p>Name: {loggedInUser.name}</p>
            <p>Email: {loggedInUser.email}</p>
            <p>Id: {loggedInUser.id}</p>
          </div>
          ) : (
          <div>
            <p>Please log in to view your profile.</p>
          </div>
        )}
      </div>
      <Footer />

    </div>
  );
};


export default Profile