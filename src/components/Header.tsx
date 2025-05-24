//import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaFileAlt } from 'react-icons/fa';
import Win98Button from './Win98Button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#c0c0c0] border-b-2 border-[#000000] z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Win98Button
              as="a"
              href="https://github.com/prakharnag"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#d4d4d4]"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </Win98Button>
            <Win98Button
              as="a"
              href="https://www.linkedin.com/in/prakhar-nag/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#d4d4d4]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </Win98Button>
            <Win98Button
              as="a"
              href="https://medium.com/@prakharnag98"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#d4d4d4]"
              aria-label="Medium"
            >
              <FaMedium className="text-xl" />
            </Win98Button>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Win98Button
              as="a"
              href="#about"
              className="px-4 py-1"
            >
              About
            </Win98Button>
            <Win98Button
              as="a"
              href="#projects"
              className="px-4 py-1"
            >
              Projects
            </Win98Button>
            <Win98Button
              as="a"
              href="#contact"
              className="px-4 py-1"
            >
              Contact
            </Win98Button>
            <Win98Button
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 flex items-center space-x-2"
            >
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </Win98Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
