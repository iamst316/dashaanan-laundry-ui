import React ,{useState} from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import Login from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated (e.g., by checking the presence of the JWT token)
  const isAuthenticated = useState(localStorage.getItem('jwtToken'));

  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
