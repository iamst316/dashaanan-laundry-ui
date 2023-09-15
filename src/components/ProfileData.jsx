// import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import sample from "../assets/img/profile/1.png"

export default function(props) {
  // const loggedInUser = useSelector((state) => state.user);

  const { name, email, addresses } = props.user;
  const navigate = useNavigate();

  function Logout(){
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    < div className="pdata-main" >
      
      <h1>Hello, {name}!</h1>
      <button>Edit Profile</button>
      
      <h2>User Addresses</h2>
      {addresses.length > 0 ? (

        <ul>
          {addresses.map((add) => {
            return <li><h3>{add.stateName}</h3>
              <h3>{add.city}</h3>
              <h3>{add.address}</h3></li>
          })}
        </ul>
      ) : (
        <h2 class="missing-info">No Addresses ADDED!!!</h2>
      )}
      <button onClick={Logout}>Logout</button>
      <img className="test" src={sample} />
    </div >
  )
}
//needs /signup endpoint in the backend to set address for the user.
