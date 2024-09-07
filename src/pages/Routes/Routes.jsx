import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../HomeRout/Home/Home";
import Products from "../Products/Products";
import AllCategories from "../AllCategories/AllCategories";
import Custom from "../Custom/Custom";
import Blog from "../Blog/Blog";
import LogIn from "../Authentication/LogIn/LogIn";
import SignUp from "../Authentication/SignUp/SignUp";
import AddToCart from "../AddToCart/AddToCart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      {
        path: "/addToCart",
        element: (
          <PrivateRoute>
            <AddToCart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
