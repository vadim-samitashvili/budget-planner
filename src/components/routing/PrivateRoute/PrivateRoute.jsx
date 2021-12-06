import React from "react";
import user from "../../../store/User";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return user.login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;