import Navbar from './Navbar'
import SideNav from './SideNav'
import Footer from './Footer'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Order from './Order';
import '../css/Orders.css';
import { useNavigate } from 'react-router-dom';

export default function() {
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
  console.log(loggedInUser);

  return (
    <div className='orders-main'>
      {loggedInUser ? (
        loggedInUser.orders.length > 0 ?
          loggedInUser.orders.map((order) => {
            return <Order info={order} />
          }) : <h2 className='missing-info'>No Orders Placed!</h2>
      ) : (
        <h2 className='missing-info'>Please Login/Register to view your Orders</h2>
      )}
    </div>
  )
}
