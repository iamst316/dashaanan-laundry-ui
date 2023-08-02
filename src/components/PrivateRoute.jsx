import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <Component />
    </>
  );
};

export default PrivateRoute;
