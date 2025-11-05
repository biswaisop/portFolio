"use client"
import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm: text-xl rounded md: p-0 hover:text-white "
    >
      {title}
    </Link>
  );
};

export default Navlink;
