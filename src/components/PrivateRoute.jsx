import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Footer from "./Footer";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const {Component} = props;
  const auth = localStorage.getItem("token");
  // console.log("auth--->", auth);

  // useEffect(()=>{
  
    if(!auth){
      navigate("/login");
    }
    
  // },[])
  

  return (
    <>
      <Navbar />
      <SideNav />
      <Component />
      <Footer />
    </>
  );
};

export default PrivateRoute;
