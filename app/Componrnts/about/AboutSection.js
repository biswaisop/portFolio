"use client";
import React, { useState } from "react";
import Image from "next/image";
import aboutImage from "./images/used.png";
import TabButton from "./TabButton/TabButton";
import Spline from "@splinetool/react-spline/next";

const AboutSection = () => {
  const [Tab, setTab] = useState("skills");

  const Tabdata = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Node.js", level: 85 },
                { name: "React.js", level: 90 },
                { name: "MongoDB", level: 80 },
                { name: "Express", level: 85 },
                { name: "Nexj.js", level: 95 },
                { name: "Langgraph", level: 90 },
                { name: "Langchain", level: 75 },
                { name: "FastAPI", level: 70 },
                { name: "RAG systems", level: 70 },
              ].map((skill, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center gap-3 px-4 py-3 bg-zinc-800/40 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:animate-pulse"></div>
                    <span className="text-sm font-medium text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 px-3 py-1 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {skill.level}% proficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Academic Journey
          </h3>
          <div className="space-y-6 relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>

            {/* Education Item 1 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-zinc-900 group-hover:scale-125 transition-transform shadow-lg shadow-purple-500/50"></div>
              <div className="bg-zinc-800/30 rounded-xl p-5 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-bold text-white">
                    B.Tech in Computer Science
                  </h4>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                    Current
                  </span>
                </div>
                <p className="text-purple-400 text-sm mb-2 font-medium">
                  RV Institute of Technology and Management
                </p>
                <p className="text-zinc-500 text-xs">2023 - 2027 • 2nd Year</p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500/70 to-pink-500/70 border-4 border-zinc-900 group-hover:scale-125 transition-transform"></div>
              <div className="bg-zinc-800/30 rounded-xl p-5 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-2">
                  Higher Secondary (12th)
                </h4>
                <p className="text-purple-400 text-sm mb-2 font-medium">
                  Netaji Subhas Public School
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-zinc-500 text-xs">2023</p>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20 font-semibold">
                    85%
                  </span>
                </div>
              </div>
            </div>

            {/* Education Item 3 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500/50 to-pink-500/50 border-4 border-zinc-900 group-hover:scale-125 transition-transform"></div>
              <div className="bg-zinc-800/30 rounded-xl p-5 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-2">
                  Secondary (10th)
                </h4>
                <p className="text-purple-400 text-sm mb-2 font-medium">
                  Netaji Subhas Public School
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-zinc-500 text-xs">2021</p>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20 font-semibold">
                    93%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            What I&apos;m Building
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Current Focus Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">�</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Current Focus
                  </h4>
                  <p className="text-purple-400 text-xs">Student Developer</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Balancing academics with hands-on coding. Building real-world
                projects to master web development.
              </p>
            </div>

            {/* Learning Card */}
            <div className="bg-zinc-800/40 rounded-xl p-6 border border-zinc-700/50 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">�</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Learning Path
                  </h4>
                  <p className="text-purple-400 text-xs">Tech Stack</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">
                  MERN Stack
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                  Data Science
                </span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full border border-pink-500/20">
                  Mobile Dev
                </span>
              </div>
            </div>
          </div>

          {/* Projects Showcase */}
          <div className="bg-zinc-800/40 rounded-xl p-6 border border-zinc-700/50 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-xl">💻</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">Featured Projects</h4>
                <p className="text-zinc-400 text-xs">
                  Recent work & contributions
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "Portfolio Website",
                  desc: "Modern design with React & Tailwind",
                  icon: "🎨",
                },
                {
                  name: "Spotify Clone",
                  desc: "Music streaming with playback features",
                  icon: "🎵",
                },
                {
                  name: "Todo List App",
                  desc: "React-based task management",
                  icon: "✅",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30 hover:border-purple-500/30 hover:bg-zinc-800/50 transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </span>
                  <div className="flex-1">
                    <h5 className="text-white text-sm font-medium mb-0.5">
                      {project.name}
                    </h5>
                    <p className="text-zinc-400 text-xs">{project.desc}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="font-extrabold text-4xl lg:text-6xl mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                About{" "}
              </span>
              <span className="text-white">Me</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Introduction */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-500 shadow-xl flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Who I Am</h3>
                  <p className="text-purple-400 text-sm">Developer & Learner</p>
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                <p>
                  I&apos;m a{" "}
                  <span className="text-purple-400 font-semibold">
                    Computer Science Engineering
                  </span>{" "}
                  student at RVITM, passionate about building elegant web
                  solutions that make a difference.
                </p>
                <p>
                  Specializing in{" "}
                  <span className="text-purple-400 font-semibold">
                    Backend development
                  </span>
                  , I create responsive and dynamic web applications with a
                  focus on user experience and clean code.
                </p>
                <p>
                  Beyond web development, I&apos;m exploring{" "}
                  <span className="text-purple-400 font-semibold">
                    Data Science, AI,ML and RAG systems
                  </span>{" "}
                  and constantly expanding my skill set to stay ahead in the
                  tech world.
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
          </div>

          {/* Right Side - Tabs Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-zinc-800/50 shadow-xl">
              {/* Tabs */}
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-zinc-800/50">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={Tab === "skills"}
                >
                  💼 Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={Tab === "education"}
                >
                  🎓 Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("experience")}
                  active={Tab === "experience"}
                >
                  ⚡ Experience
                </TabButton>
              </div>

              {/* Tab Content with animation */}
              <div className="min-h-[350px] animate-fadeIn">
                {Tabdata.find((t) => t.id === Tab).content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
