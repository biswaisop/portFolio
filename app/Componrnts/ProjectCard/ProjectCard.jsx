"use client";
import React from "react";
import Image from "next/image";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "React portfolio website",
    description:
      "A personal portfolio built with React, showcasing projects, skills, and contact information. Designed with responsive layouts and smooth animations.",
    image: project2,
    tag: ["all", "web"],
    link: "/",
    codeLink: "https://github.com/biswaisop/portFolio "
  },
  {
    id: 2,
    title: "Spotify-clone",
    description:
      "A Spotify-inspired music streaming app built using React, featuring playlist creation, song browsing, and playback functionality with a clean UI.",
    image: project1,
    tag: ["all", "web", "music"],
    link: "https://www.botify.freewebhostmost.com/",
    codeLink: "https://github.com/biswaisop/Spotify-clone"
  },
  {
    id: 3,
    title: "Todo List",
    description:
      "A simple to-do list app built using React, allowing users to add, edit, and delete tasks with a clean and user-friendly interface.",
    image: project3,
    tag: ["all", "web", "productivity"],
    link: "https://biswaisop.github.io/ToDoList/",
    codeLink: "https://github.com/biswaisop/ToDoList"
  },
];

const ProjectCard = () => {
  return (
    <div className="container mx-auto max-w-screen-xl py-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative bg-zinc-950 rounded-lg shadow shadow-zinc-800 text-white w-full sm:max-w-sm md:max-w-none transition-transform duration-300 transform hover:scale-105 group"
          >
            <Image
              src={project.image}
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
              alt={`${project.title} image`}
            />
            
            {/* Overlay with icons */}
            <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-t-lg flex items-center justify-center space-x-5">
              <Link href={project.codeLink} target="_blank">
                <FaCode className="text-white text-2xl cursor-pointer hover:text-blue-400" title="View Code" />
              </Link>
              <Link href={project.link} target="_blank">
                <FaExternalLinkAlt className="text-white text-2xl cursor-pointer hover:text-blue-400" title="View Project" />
              </Link>
            </div>

            <div className="p-5">
              <Link href={project.link} target="_blank">
                <h5 className="text-xl font-semibold mb-2 font-mono bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  {project.title}
                </h5>
              </Link>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
