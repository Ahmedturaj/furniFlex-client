import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../HomeRout/Home/Home";
import Products from "../Products/Products";
import AllCategories from "../AllCategories/AllCategories";
import Custom from "../Custom/Custom";
import Blog from "../Blog/Blog";
import LogIn from "../Authentication/LogIn/LogIn";
import SignUp from "../Authentication/SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/categories", element: <AllCategories /> },
      { path: "/custom", element: <Custom /> },
      { path: "/blog", element: <Blog /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);
