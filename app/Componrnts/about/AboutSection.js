import React from "react";
import Image from "next/image";
import aboutImage from "./images/used.png";

const AboutSection = () => {
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <div>
          <h1 className="font-xl">About Me</h1>
          <p>
            Hello! I'm Biswadip Mandal, a first-semester Computer Science
            Engineering student at RVITM. I'm passionate about web development
            and currently honing my skills with the MERN stack. I've already
            built several projects that showcase my ability to create responsive
            and dynamic web applications.</p> <p>In addition to web development, I have
            a strong foundation in Python, having created various projects that
            demonstrate my problem-solving skills. I'm also familiar with SQL,
            which helps me manage and interact with databases efficiently.</p> <p> As I
            continue my journey in tech, I'm excited to learn, grow, and take on
            new challenges!
          </p>
        </div>
        <Image
          src={aboutImage}
          width={300}
          height={300}
          className="rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="About Image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
