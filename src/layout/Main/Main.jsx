import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div className="container mx-auto">
      <div className="">{noHeaderFooter || <Navbar />}</div>
      <div className="">
        <Outlet />
      </div>
      <div className="">{noHeaderFooter || <Footer />}</div>
    </div>
  );
};

export default Main;
