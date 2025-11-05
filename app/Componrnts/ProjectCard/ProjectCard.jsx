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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((project) => (
        <div
          key={project.id}
          className="group relative bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800 text-white overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
        >
          <div className="relative overflow-hidden aspect-video">
            <Image
              src={project.image}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
              className="rounded-t-2xl w-full h-full transition-transform duration-500 group-hover:scale-110"
              alt={`${project.title} image`}
            />
            
            {/* Overlay with icons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
              <Link 
                href={project.codeLink} 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaCode className="text-white text-xl" />
                <span className="text-white font-semibold text-sm">Code</span>
              </Link>
              <Link 
                href={project.link} 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-purple-500/80 backdrop-blur-sm rounded-full border border-purple-400/50 hover:bg-purple-600 transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-white text-lg" />
                <span className="text-white font-semibold text-sm">Live</span>
              </Link>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <Link href={project.link} target="_blank">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-400 hover:to-red-400 transition-all duration-300">
                {project.title}
              </h3>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tag.slice(1).map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
