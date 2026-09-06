import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { clearSession, getRole, getToken, isTokenExpired } from "../Utilis/api";

/**
 * Gate for every /admin* screen. This is convenience only — the API enforces
 * the same rules on every guarded route, so a forged cookie buys nothing.
 */
const AdminRoute = () => {
  const location = useLocation();
  const token = getToken();

  if (!token || getRole() !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isTokenExpired(token)) {
    clearSession();
    toast.error("Session expired, please login again");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
