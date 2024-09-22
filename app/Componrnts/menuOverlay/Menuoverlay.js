import React from "react";
import Link from "next/link";
import Navlink from "../Navlink/Navlink";

const Menuoverlay = () => {
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
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menuoverlay;
