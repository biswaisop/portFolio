"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import DesignerImage from "./images/file.png";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline/next";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-5 place-self-center text-center ml-4 sm:ml-0 lg:ml-8 sm:text-left">
          <h1 className="text-white mb-4 font-extrabold text-4xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I&apos;m {""}
            </span>
            <TypeAnimation
              sequence={["Biswadip Mandal"]}
              wrapper="span"
              speed={37}
              repeat={0} // Animation runs once
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl z-30">
            I’m a first-semester Computer Science Engineering student at RVITM,
            passionate about web development, app development, and data science.
            With hands-on experience in web development, I’m eager to expand my
            skills and grow academically and professionally.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-0 sm:mr-5 mb-4 sm:mb-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full text-white font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center ml-4 lg:ml-[5.5rem] mt-6 sm:mt-0 sm:hidden">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] flex justify-center items-center relative">
            <Image
              src={DesignerImage}
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
