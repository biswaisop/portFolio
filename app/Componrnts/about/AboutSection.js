"use client";
import React, { useState } from "react"; 
import Image from "next/image";
import aboutImage from "./images/used.png";
import TabButton from "./TabButton/TabButton";

const AboutSection = () => {
  const [Tab, setTab] = useState("skills");

  const Tabdata = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="md:flex gap-3">
          <li className="my-2">Node.js</li>
          <li className="my-2">Express</li>
          <li className="my-2">React.js</li>
          <li className="my-2">MongoDB</li>
          <li className="my-2">Tailwind</li>
          <li className="my-2">Javascript</li>
          <li className="my-2">Python</li>
          <li className="my-2">MySQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li className="my-2">
            B.Tech in Computer Science Engineering, 1st Year - RVITM
          </li>
          <li className="my-2">
            12th Grade - Netaji Subhas Public School (85%)
          </li>
          <li className="my-2">
            10th Grade - Netaji Subhas Public School (93%)
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul>
          <li className="my-2">
            No formal experience yet, currently a student.
          </li>
          <li className="my-2">
            Building personal projects such as a portfolio website, a to-do list
            app using React, and a social media dashboard.
          </li>
          <li className="my-2">
            Learning web development (MERN stack), data science, and app
            development.
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    setTab(id); // Just use setTab for tab switching
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="ml-4 lg:ml-8 mt-3 sm:mt-0 mb-8 sm:mb-0">
          <h1 className="font-extrabold text-4xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              About{" "}
            </span>
            Me
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl pt-5">
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
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={Tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={Tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={Tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {Tabdata.find((t) => t.id === Tab).content}
          </div>
        </div>
        <Image
          src={aboutImage}
          width={500}
          height={400}
          className="rounded-lg md:mt-50 md:ml-12 sm:mt-5"
          alt="About Image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
