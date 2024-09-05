import React, { useContext, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/F.png";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const { logOut, loggedUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navLink = (
    <>
      <li>
        <NavLink is to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/categories"}>Categories</NavLink>
      </li>
      <li>
        <NavLink to={"/custom"}>Custom</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="border-b rounded-md">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="bg-[#1E99F5] p-1 rounded-full" />
            <h2 className="text-xl">
              Flex<span className="text-[#1E99F5]">Flex</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div className="">
              <HiOutlineShoppingBag className="text-3xl relative" />
              <div className="text-[10px] text-center bg-gray-200 rounded-full w-3 h-3 absolute top-10 right-[7rem]">
                2
              </div>
            </div>
            <div className="avatar cursor-pointer hover:ring rounded-full">
              <div
                onClick={() => setIsClick(!isClick)}
                className="w-10 rounded-full"
              >
                <img
                  className="w-10"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {isClick === true && (
              <div
                className={
                  "flex flex-col absolute right-9 top-14 p-2 rounded-md bg-gray-200"
                }
              >
                {loggedUser !== " " && (
                  <button className="btn" onClick={handleLogOut}>
                    LogOut
                  </button>
                )}

                <div
                  className={loggedUser === " " ? "flex flex-col" : "hidden"}
                >
                  <Link to={"/login"}>LogIn</Link>
                  <Link to={"/signUp"}>SignUp</Link>{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
