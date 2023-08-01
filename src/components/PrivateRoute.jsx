import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const {Component} = props;
  useEffect(()=>{
    const auth = localStorage.getItem("token");
    console.log(auth);
    if(!auth){
      navigate("/login");
    }
  },[])
  

  return (
    <>
      <Component />
    </>
  );
};

export default PrivateRoute;
