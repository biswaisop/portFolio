import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="container max-w-screen-xl mx-14">
      <div className="ml-4 lg:ml-8 mt-3 sm:mt-0 mb-8 sm:mb-0">
        <div className="">
          <h1 className="font-extrabold text-4xl lg:text-6xl mb-4 text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              My{" "}
            </span>
            Projects
          </h1>
        </div>
        <div className="mt-7">
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
};

export default Projects;