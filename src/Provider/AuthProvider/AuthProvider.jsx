import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState(" ");
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to load products data");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  const SignUp = (firstName, lastName, email, password) => {
    const user = { name: firstName + " " + lastName, email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = existingUsers.some(
      (existingUser) => existingUser.email === email
    );
    if (emailExists) {
      console.log("User with this email already exists.");
      return false;
    }
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  };
  const signIn = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || " ";

      if (loggedUser === " ") {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        return true;
      } else {
        setLoggedUser(user);
        return true;
      }
    } else {
      console.log("Invalid email or password");
      return false;
    }
  };
  const logOut = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(" ");
  };

  // add to cart

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item._id === product._id);
    if (productInCart) {
      productInCart.quantity += 1;
      productInCart.discountPrice =
        product.discountPrice * productInCart.quantity;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        discountPrice: product.discountPrice,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItem(cart);
    return true;
  };

  // get cart Item

  useEffect(() => {
    const cartItem = localStorage.getItem("cart");
    if (cartItem) {
      const cart = JSON.parse(cartItem);
      setCartItem(cart);
    }
  }, []);

  // updateCartItem

  const updateCartQuantity = (productId, newQuantity) => {
    let updatedCart = cartItem.map((item) => {
      if (item._id === productId) {
        if (newQuantity > 0) {
          const discountPricePerUnit = item.discountPrice / item.quantity;

          const updatedDiscountPrice = discountPricePerUnit * newQuantity;

          return {
            ...item,
            quantity: newQuantity,
            discountPrice: updatedDiscountPrice,
          };
        }
      }
      return item;
    });
    updatedCart = updatedCart.filter((item) => item.quantity > 0);
    setCartItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // remove cart
  const removeCart = (cartId) => {
    const updatedCart = cartItem.filter((item) => item._id !== cartId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  };

  // get loggedUser
  useEffect(() => {
    const userData = localStorage.getItem("loggedUser");
    if (userData) {
      const userinfo = JSON.parse(userData);
      setLoggedUser(userinfo);
    }
  }, []);
  // getUser
  useEffect(() => {
    const userData = localStorage.getItem("users");

    if (userData) {
      const users = JSON.parse(userData);

      setUser(users);
    }
  }, []);

  const authInfo = {
    addToCart,
    updateCartQuantity,
    cartItem,
    removeCart,
    SignUp,
    signIn,
    logOut,
    setUser,
    user,
    loggedUser,
    products,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
