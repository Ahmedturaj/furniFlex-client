import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
