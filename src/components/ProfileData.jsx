// import { useDispatch, useSelector } from "react-redux";

export default function(props) {
  // const loggedInUser = useSelector((state) => state.user);

  const { name, email, addresses } = props.user;

  return (
    < div >
      <h2>User Profile</h2>
      <h1>Hello, {name}!</h1>
      <button>Edit Profile</button>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
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
      <button>Logout</button>
    </div >
  )
}
//needs /signup endpoint in the backend to set address for the user.
