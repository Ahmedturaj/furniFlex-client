import React, { useContext, useState } from "react";
import logo from "../../../assets/F.png";
import googleLogo from "../../../assets/icons8-google 1.svg";
import { FaApple, FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { SignUp, user } = useContext(AuthContext);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const check = form.check.checked;
    if (user.email === email) {
      toast.error("this email is already exist");
      return;
    }
    if (!check) {
      toast.error("You need to agree to the Terms & Policy to sign up");
      return;
    }
    if (password.length < 6) {
      toast.error("You have to put 6 character In Your Password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "You have to use at least one Uppercase character In Your Password"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error(
        "You have to use at least one lowercase character In Your Password"
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      toast.error(
        "You have to use at least one numeric character In Your Password"
      );
      return;
    }

    const data = await SignUp(firstName, lastName, email, password);
    if (data) {
      toast.success("You have SignUp successfully");
      navigate(location?.state ? location.state.from.pathname : "/");
      e.target.reset();
      form.reset();
    }
  };

  return (
    <div className="flex items-center justify-center gap-14">
      <div className="card bg-base-200 pb-1">
        <form onSubmit={handleSignUp} className="card-body border">
          {/* intro */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-center text-3xl font-bold">Welcome To</h2>
            <h1 className="text-center text-5xl font-extrabold">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h1>
            <p className="text-center">
              Signup for purchase your desire products
            </p>
          </div>
          {/* name */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <div className="input input-bordered flex flex-col">
              <span className="text-xs">first name(Optional)</span>
              <input type="text" name="firstName" />
            </div>
            <div className="input input-bordered flex flex-col">
              <span className="text-xs"> last name(optional)</span>
              <input type="text" name="lastName" />
            </div>
          </div>
          {/* email */}
          <div className="input input-bordered w-full my-5 flex flex-col">
            <span className="text-xs">Email address</span>
            <input type="email" name="email" id="" />
          </div>
          {/* Password start */}
          <div className="">
            <div className="input input-bordered w-full my-5 flex flex-col">
              <span className="text-xs">Password</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
              />
            </div>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="relative -right-[490px] cursor-pointer -top-12"
            >
              {showPassword ? (
                <FiEye className="text-xl" />
              ) : (
                <FaRegEyeSlash className="text-xl" />
              )}
            </div>
          </div>
          {/* password end */}
          <div className="flex items-center gap-2">
            <input className="cursor-pointer" type="checkbox" name="check" />
            <p>
              I agree to the
              <span className="hover:text-blue-500 underline text-base text-base-content">
                Terms & Policy
              </span>
            </p>
          </div>
          <input
            className="mt-5 p-2 cursor-pointer bg-black text-white font-bold text-xl w-full text-center rounded-lg"
            type="submit"
            value="SignUp"
          />
        </form>
        <div className="flex items-center justify-center gap-2">
          <div className="border w-full"></div>
          <div className="">or</div>
          <div className="border w-full"></div>
        </div>
        <div className=" flex items-center justify-center gap-6 w-full">
          <button className="btn btn-outline border border-[#D9D9D9] rounded-md">
            <img src={googleLogo} alt="" />
            SignIn With Google
          </button>
          <button className="btn btn-outline border border-[#D9D9D9] rounded-md">
            <FaApple className="text-2xl" />
            SignIn With Apple
          </button>
        </div>
        <p className="text-center mt-5">
          Have an account?
          <Link to={"/login"} className="text-[#0F3DDE] hover:underline">
            SignIn
          </Link>
        </p>
      </div>
      <div>
        <img
          className=""
          src="https://i.ibb.co/dpS7Rss/chris-lee-70l1t-DAI6r-M-unsplash-1.png"
          alt=""
        />
        <div className="absolute top-64  right-10">
          <div className="flex flex-col items-center justify-center">
            <img
              className="p-4 w-24 mb-5 bg-[#1E99F5] rounded-full "
              src={logo}
              alt=""
            />
            <h2 className="text-white text-5xl font-bold">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h2>
            <p className="text-base text-white">
              Discover a seamless shopping experience with our curated <br />
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
