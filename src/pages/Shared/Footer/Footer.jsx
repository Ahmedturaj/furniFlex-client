import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10">
      <div className=" flex justify-between w-full gap-4 p-6">
        <div className="">
          <aside className="flex items-center justify-center gap-1">
            <img
              src="https://i.ibb.co.com/3sFbRxF/icon.png"
              alt="icon"
              border="0"
            />
            <p className="text-xl">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </p>
          </aside>
        </div>
        <div className=" flex justify-end gap-14">
          <nav className="flex flex-col gap-2">
            <h6 className="text-xl text-white">About Us</h6>
            <a className="link link-hover text-slate-400">Master Plan</a>
            <a className="link link-hover text-slate-400">Jobs</a>
            <a className="link link-hover text-slate-400">Invest</a>
            <a className="link link-hover text-slate-400">Pressroom</a>
            <a className="link link-hover text-slate-400">blog</a>
            <a className="link link-hover text-slate-400">Contact</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="text-xl text-white">Explore EEVE</h6>
            <a className="link link-hover text-slate-400">
              Unlock my Robot Power
            </a>
            <a className="link link-hover text-slate-400">Starlight</a>
            <a className="link link-hover text-slate-400">Robot Platform</a>
            <a className="link link-hover text-slate-400">EEVE Roadmap</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="text-xl text-white">Community & Support</h6>
            <a className="link link-hover text-slate-400">Willow X Community</a>
            <a className="link link-hover text-slate-400">
              Developer & Maker Access
            </a>
            <a className="link link-hover text-slate-400">Special Cases</a>
          </nav>
        </div>
      </div>
      <hr className="my-5" />
      <div className=" flex items-center justify-between">
        <div className="text-white text-xl flex justify-start gap-3">
          <p
            style={{ transition: "all 0.5s" }}
            className="cursor-pointer hover:scale-110"
          >
            <TbBrandFacebook />
          </p>
          <p
            style={{ transition: "all 0.5s" }}
            className="cursor-pointer hover:scale-110"
          >
            <SiInstagram />
          </p>
          <p
            style={{ transition: "all 0.5s" }}
            className="cursor-pointer hover:scale-110"
          >
            <FaXTwitter />
          </p>
          <p
            style={{ transition: "all 0.5s" }}
            className="cursor-pointer hover:scale-110"
          >
            <LuLinkedin />
          </p>
        </div>
        {/*  */}
        <div className=" text-sm text-slate-400 flex items-center justify-between gap-10">
          <p>March22 Recap</p>
          <p>Privacy Policy</p>
          <p>General Terms</p>
          <p>Contact</p>
        </div>
        {/*  */}
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://i.ibb.co.com/gP3Xq3V/image.png"
            alt="image"
            border="0"
          />
          <p className="text-xm text-slate-400">United States (English)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
