import React from 'react'
import Cookies  from "js-cookie"
import { Outlet } from 'react-router-dom';
const PrivateRoutes = () => {
  let token = Cookies.get("token");
  
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes