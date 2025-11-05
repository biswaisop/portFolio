"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import DesignerImage from "./images/file.png";
import { TypeAnimation } from "react-type-animation";


const Herosection = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 w-full">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <div className="mb-4">
          </div>
          <h1 className="text-white mb-6 font-extrabold text-4xl lg:text-7xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I&apos;m <br className="hidden sm:block" />
            </span>
            <TypeAnimation
              sequence={[
                "an AI developer",
                2000,
                "a Web Developer",
                2000,
                "a Problem Solver",
                2000,
                "Biswadip Mandal",
                2000,
              ]}
              wrapper="div"
              speed={50}
              className="block mt-2"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl leading-relaxed">
            Third-semester Computer Science Engineering student at RVITM,
            passionate about crafting elegant web solutions. Specializing in{" "}
            <span className="text-purple-400 font-semibold">Backend Development</span> with a keen
            interest in AI/ML, data science and RAG systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <a
              href="#contact"
              className="group px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
            >
              Let&apos;s Connect
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform"></span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 w-full sm:w-fit rounded-full text-white font-bold bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 text-center"
            >
              Download CV
              
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="relative">
            
              <div className="rounded-full bg-[#252525] w-[230px] h-[230px] lg:w-[370px] lg:h-[370px] flex justify-center items-center relative overflow-hidden">
                <Image
                  src={DesignerImage}
                  alt="Biswadip Mandal - Portfolio"
                  width={350}
                  height={350}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
    </section>
  );
};

export default Herosection;
