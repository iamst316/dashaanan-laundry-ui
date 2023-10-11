import Navbar from './Navbar'
import SideNav from './SideNav'
import Footer from './Footer'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Order from './Order';
import '../css/Orders.css'

export default function() {
  useEffect(() => {
    const interval = 30 * 60 * 1000;
    // const interval = 10*1000;

    const timer = setTimeout(() => {
      localStorage.removeItem("token")
      console.log('Item removed from localStorage.');
    }, interval);
  }, []);

  const loggedInUser = useSelector((state) => state.user);

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
