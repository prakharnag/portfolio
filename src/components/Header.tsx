import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Profile Image with Text */}
          <div className="flex items-center space-x-1">
            {/* Add your image here */}
            <img 
              src="https://imagizer.imageshack.com/img923/623/o1YQTc.png" 
              alt="Prakhar" 
              className="w-16 h-16 rounded-full" 
            />
            <div className="text-2xl font-bold text-black-900">Prakhar Nag</div>
          </div>
          
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#dev-journey" className="text-black-700 hover:text-black-900">
            AboutMe
          </a>
          <a href="#projects" className="text-black-700 hover:text-black-900">
            Projects
          </a>
          <a href="#skills" className="text-black-700 hover:text-black-900">
            Skills
          </a>
          <a href="#contact" className="text-black-700 hover:text-black-900">
            Contact
          </a>
        </nav>


          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/prakharnag" className="text-black-700 hover:text-black-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/prakhar-nag/" className="text-black-700 hover:text-black-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:prakharnagwork@gmail.com" className="text-black-700 hover:text-black-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Menu className="w-6 h-6" /> : null}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 text-black-700 hover:text-black-9000">About Me</a>
            <a href="#projects" className="block px-3 py-2 text-black-700 hover:text-black-900">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-black-700 hover:text-black-900">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-black-700 hover:text-black-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
