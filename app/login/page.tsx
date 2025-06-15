import React from "react";
import Image from "next/image";
import "./login.css";

import logo from "./360-logo.jpg";
import banner from "./banner.jpg";

const Login = () => {
  return (
    <div className="login-page min-h-[100vh]  flex items-center relative">
      <div className=" hidden md:block layers absolute top-[50%] transform-[translateY(-50%)] left-0    w-full min-h-[650px]">
       
        <div className="layer layer-2 bg-[#D9D3D0] absolute w-[400px] h-[300px] top-0 "></div>
        <div className="layer layer-3 bg-[#333333] absolute w-[600px] h-[450px] bottom-[20px] "></div>
         <div className="layer-1 absolute left-[40px] top-[50%] transform-[translateY(-50%)] max-w-[1000px]">
          <Image src={banner} alt="banner" className="h-[470px] object-cover" />
        </div>
        <div className="layer layer-4 bg-[#9886F7] absolute w-[120px] h-[140px] bottom-0 "></div>
      </div>

      <div className="form-wrapper w-full max-w-[1400px] mx-auto px-[20px]">
        <form
          action=""
          className="backdrop-blur-3xl  bg-white/60 border border-gray-200 md:border-none relative mx-auto md:mr-[60px]  max-w-[420px]  rounded-[10px] p-[40px] pb-[50px] shadow-[7px_7px_0px_#5435F5] "
        >
          <div className="hidden md:block absolute top-0 right-[0]  transform-[translate(50%,-20%)] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
            <Image src={logo} alt="Logo" className="max-w-[115px]" />
          </div>
          <h1 className=" text-[35px] text-center mb-[50px] text-transparent bg-clip-text bg-[linear-gradient(to_left,_#000000_22%,_#292929_61%,_#666666_70%)]">Welcome</h1>
          <h4 className="text-[18px] tracking-[0.18px] font-medium mb-[29px]">Login to your Account</h4>

          <div className="field text-[14px] mb-5">
            <label htmlFor="login-username" className="mb-[10px] block">
              User Name
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="Username@360.one"
              className="bg-white px-3 py-2 block w-full border border-gray-300 rounded-[7px] text-[14px]"
            />
          </div>

          <div className="field text-[14px]  mb-5">
            <label htmlFor="login-username" className="mb-[10px] block">
              Password
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="*********"
              className="bg-white px-3 py-2 block w-full border border-gray-300 rounded-[7px] text-[14px]"
            />
          </div>
          <button className="btn cursor-pointer  px-3 py-2 bg-[#2C2C2C] hover:bg-[#000]  text-white rounded-[7px] text-center block w-full   mb-5">
            Login
          </button>

          <div className="form-footer text-center">
            <a href="#/" className="hover:underline text-center ">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
