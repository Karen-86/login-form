import React from "react";
import Image from "next/image";
import { Space_Grotesk, Krona_One } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: ['400'],
});

import logo from "./360-logo.jpg";
import banner from "./banner.jpg";

const Login = () => {
  return (
    <div className={`login-page min-h-[100vh]  flex items-center relative bg-white ${spaceGrotesk.className} `}>
      {/* <div className=" hidden md:block layers absolute top-[50%] transform-[translateY(-50%)] left-0    w-full min-h-[650px]">
       
        <div className="layer layer-2 bg-[#D9D3D0] absolute w-[400px] h-[300px] top-0 "></div>
        <div className="layer layer-3 bg-[#333333] absolute w-[600px] h-[450px] bottom-[20px] "></div>
         <div className="layer-1 absolute left-[40px] top-[50%] transform-[translateY(-50%)] max-w-[1000px]">
          <Image src={banner} alt="banner" className="h-[470px] object-cover" />
        </div>
        <div className="layer layer-4 bg-[#9886F7] absolute w-[120px] h-[140px] bottom-0 "></div>
      </div> */}

      <div className=" hidden md:block layers absolute top-[50%] transform-[translateY(-50%)] left-0  pt-[40%] h-0  w-full  ">
        <div className="layer layer-2 bg-[#D9D3D0] absolute  top-0 h-0 pt-[20%] w-[30%]"></div>
        <div className="layer layer-3 bg-[#333333] absolute  bottom-[20px] h-0 pt-[30%] w-[41%]"></div>
        <div className="layer-1 absolute left-[40px] top-[50%] transform-[translateY(-50%)] w-[73%] h-0 pt-[29%]">
          <Image src={banner} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="layer layer-4 bg-[#9886F7] absolute  bottom-0  h-0 pt-[9%] w-[8%]"></div>
      </div>

      <div className="form-wrapper w-full  mx-auto px-[20px] md:px-[80px]">
        <form
          action=""
          className="backdrop-blur-3xl  bg-white/60 border border-gray-200  relative mx-auto md:mr-[60px] max-w-[400px] 4xl:max-w-[524px]  rounded-[10px] p-[30px] 4xl:p-[43px] !pb-[80px] shadow-[9px_9px_0px_#5435F5] "
        >
          <div className="hidden md:block absolute top-0 right-[0]  transform-[translate(50%,-20%)] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
            <Image src={logo} alt="Logo" className="max-w-[130px]" />
          </div>
          <h1 className={`text-[32px] 4xl:text-[42px] text-center mb-[45px] 4xl:mb-[66px] text-transparent bg-clip-text bg-[linear-gradient(to_left,_#000000_22%,_#292929_61%,_#666666_80%)] ${kronaOne.className}`}>
            Welcome
          </h1>
          <h4 className="text-[18px] 4xl:text-[24px] tracking-[0.18px] font-medium mb-[18px] 4xl:mb-[33px]">Login to your Account</h4>

          <div className="field text-[14px] 4xl:text-[16px] mb-[19px] 4xl:mb-[25px]">
            <label htmlFor="login-username" className="mb-[6px] 4xl:mb-[10px] block">
              User Name
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="Username@360.one"
              className="bg-white px-3 py-[10px] block w-full border border-gray-300 rounded-[7px] text-[14px] 4xl:text-[16px]"
            />
          </div>

          <div className="field text-[14px] 4xl:text-[16px]  mb-[19px] 4xl:mb-[25px]">
            <label htmlFor="login-username" className="mb-[6px] 4xl:mb-[10px] block">
              Password
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="*********"
              className="bg-white px-3 py-[10px] block w-full border border-gray-300 rounded-[7px] text-[14px] 4xl:text-[16px]"
            />
          </div>
          <button className="btn cursor-pointer text-[16px] 4xl:text-[20px]  px-3 py-2 bg-[#2C2C2C] hover:bg-[#000]  text-white rounded-[7px] text-center block w-full   mb-[14px]">
            Login
          </button>

          <div className="form-footer text-center">
            <a href="#/" className="hover:underline text-center text-[14px] 4xl:text-[18px]">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
