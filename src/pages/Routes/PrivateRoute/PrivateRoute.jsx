import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);
  const location = useLocation();
  if (loggedUser !== " ") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
