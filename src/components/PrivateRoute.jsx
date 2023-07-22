import React ,{useState} from 'react';
import { Route, redirect } from 'react-router-dom';
import Login from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated (e.g., by checking the presence of the JWT token)
  const isAuthenticated = useState(localStorage.getItem('jwtToken'));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> :
        <Login />
      }
    />
    // {isAuthenticated ? <Route {...rest} /> : < Login /> } 
  );
};

export default PrivateRoute;
