import Footer from "./Footer"
import Navbar from "./Navbar"
import SideNav from "./SideNav"
import "../css/Profile.css"
import { useDispatch, useSelector } from "react-redux";
import ProfileData from "./ProfileData";

const Profile = () => {
  const loggedInUser = useSelector((state) => state.user);
  console.log("IN Profile-->", loggedInUser);
  return (
    <div>
      <Navbar />
      <SideNav />

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
      <Footer />

    </div >
  );
};


export default Profile
