import Navbar from './Navbar'
import SideNav from './SideNav'
import Footer from './Footer'
import { useEffect } from 'react';
export default function() {


  useEffect(() => {
    
    const interval = 30*60*1000;
    const timer = setTimeout(() => {
        localStorage.removeItem("token")
        console.log('Item removed from localStorage.');
    }, interval);

  }, []);
  return (
    <>
      <Navbar />
      <SideNav />
      wow!!! much orders
      <Footer />
    </>
  )
}
