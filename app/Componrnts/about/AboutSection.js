"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "./images/used.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="ml-4 lg:ml-8 mt-3 sm:mt-0 mb-8 sm:mb-0"> {/* Added margin-bottom */}
          <Image
            src={aboutImage}
            width={500}
            height={400}
            className="rounded-lg"
            alt="About Image"
          />
        </div>
        <div className="text-center md:text-left ml-4 lg:ml-8 ">
          <h1 className="font-extrabold text-4xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              About {""}
            </span>
            Me
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m passionate about web development and currently honing my
            skills with the MERN stack. I&apos;ve already built several projects
            that showcase my ability to create responsive and dynamic web
            applications.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            In addition to web development, I have a solid foundation in Python,
            demonstrated through various projects that showcase my
            problem-solving skills. I&apos;m also familiar with SQL, enabling me
            to manage and interact with databases effectively. I&apos;m excited
            to continue learning and take on new challenges in my tech journey.
          </p>

          <div className="mb-8">
            <span className="font-semibold text-white text-base sm:text-lg mb-6 lg:text-xl ">
              Currently Learning
            </span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-2 mb-6 lg:text-xl ">
              Web development using the MERN stack (MongoDB, Express, React,
              Node.js).
            </p>
          </div>
          <div className="mb-8">
            <span className="font-semibold text-white text-base sm:text-lg mb-6 lg:text-xl ">
              Projects
            </span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-2 mb-4 lg:text-xl">
              I&apos;ve built multiple web applications that demonstrate my
              skills in creating responsive and interactive user interfaces
              such as a{" "}
              <Link
                href="https://www.botify.freewebhostmost.com/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-lime-500 font-semibold hover:underline"
              >
                Spotify Clone
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.botify.freewebhostmost.com/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-lime-500 font-semibold hover:underline"
              >
                Todo list using react
              </Link>{" "}
              and some others.
            </p>
          </div>

          <div className="font-semibold text-white text-base sm:text-lg mb-6 lg:text-xl ">
            Programming Languages
          </div>

          <div className="mb-5 px-5">
            <span className="font-semibold text-white pt-10">Python</span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-2 mb-6 lg:text-xl ">
              Developed several projects showcasing automation and
              scripting skills.
            </p>
          </div>
          <div className="mb-5 px-5">
            <span className="font-semibold text-white pt-10">SQL</span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-2 mb-6 lg:text-xl ">
              Experienced in managing and querying databases.
            </p>
          </div>
          <div className="mb-5 px-5">
            <span className="font-semibold text-white pt-10">Javascript</span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-2 mb-6 lg:text-xl ">
              Experienced in using JavaScript to create scripts for
              frontend as well as backend logics and managing databases
              using MongoDB.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
