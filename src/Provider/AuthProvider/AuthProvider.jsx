import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(" ");
  const [loggedUser, setLoggedUser] = useState(" ");
  const SignUp = (firstName, lastName, email, password) => {
    const user = { name: firstName + " " + lastName, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  };
  const signIn = (email, password) => {
    if (user.email === email && user.password === password) {
      if (loggedUser === " ") {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        return true;
      } else {
        setLoggedUser(user);
        return true;
      }
    }
  };
  const logOut = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(" ");
  };
  useEffect(() => {
    const userData = localStorage.getItem("loggedUser");
    if (userData) {
      const userinfo = JSON.parse(userData);
      setLoggedUser(userinfo); // Set user data in state if available
    }
  }, []);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const userinfo = JSON.parse(userData);
      setUser(userinfo); // Set user data in state if available
    }
  }, []);

  const authInfo = { SignUp, signIn, logOut, setUser, user, loggedUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
