import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold font-mono bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text inline-block mb-4"
            >
              &lt;Biswa_Man/&gt;
            </Link>
            <p className="text-zinc-400 text-sm">
              Building digital experiences with passion and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/biswaisop"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaGithub className="text-lg text-zinc-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaLinkedin className="text-lg text-zinc-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaTwitter className="text-lg text-zinc-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Biswadip Mandal. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
