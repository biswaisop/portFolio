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
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} onClick={(e) => handleClick(e, link.path)}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menuoverlay;
