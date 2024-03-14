import React, { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom';
import Usercontext, { UserState } from '../Context/Usercontext';

const PrivateRoute = ({ children }) => {
  const { user } = UserState()
 // console.log(authData);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
  

