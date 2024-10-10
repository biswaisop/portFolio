import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <h1 className="font-extrabold text-4xl lg:text-6xl mb-4 text-left">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          My{" "}
        </span>
        Projects
      </h1>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
