"use client";
import React from "react";
import Link from "next/link";
import Navlink from "../Navlink/Navlink";

const Menuoverlay = ({ onLinkClick }) => {
  const links = [
    {
      title: "About",
      path: "#about",
    },

    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "Projects",
      path: "#projects",
    },

    {
      title: "Contact",
      path: "#contact",
    },
  ];
  
  const handleClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const offset = 100; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      if (onLinkClick) {
        onLinkClick();
      }
    }
  };
  
  return (
    <div className="border-t border-zinc-200 bg-[#f8f7f4] dark:border-zinc-800 dark:bg-zinc-950">
      <ul className="flex flex-col px-4 py-4">
        {links.map((link, index) => (
          <li key={index} onClick={(e) => handleClick(e, link.path)}>
            <Navlink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menuoverlay;
