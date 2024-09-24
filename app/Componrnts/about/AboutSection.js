"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "./images/used.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="ml-4 lg:ml-8 mt-6 sm:mt-0">
          <Image
            src={aboutImage}
            width={500}
            height={400}
            className="rounded-lg"
            alt="About Image"
          />
        </div>
        <div className="text-center md:text-left ml-4 lg:ml-8">
          <h1 className="font-extrabold text-4xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              About {""}
            </span>
            Me
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hello! I'm Biswadip Mandal, a first-semester Computer Science
            Engineering student at RVITM. I'm passionate about web development
            and currently honing my skills with the MERN stack. I've already
            built several projects that showcase my ability to create responsive
            and dynamic web applications.
          </p>

          <ul>
            <li>
              <span className="font-semibold text-white text-base sm:text-lg mb-6 lg:text-xl">
                Currently Learning
              </span>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Web development using the MERN stack (MongoDB, Express, React,
                Node.js).
              </p>
            </li>
            <li>
              <span className="font-semibold text-white text-base sm:text-lg mb-6 lg:text-xl">
                Projects
              </span>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I've built multiple web applications that demonstrate my skills
                in creating responsive and interactive user interfaces scuh as a{" "}
                <Link
                  href="https://www.botify.freewebhostmost.com/"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:underline">
                  Spotify Clone
                </Link> and <Link
                  href="https://www.botify.freewebhostmost.com/"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:underline">
                  Todo list using react
                </Link> and some others
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
