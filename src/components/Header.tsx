import React, { useEffect, useRef } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 flex-wrap">
          {/* Profile Image with Text */}
          <div className="flex items-center space-x-2">
            <img
              src="https://imagizer.imageshack.com/img923/623/o1YQTc.png"
              alt="Prakhar"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-lg font-bold">
              Prakhar Nag
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="home" className="nav-link">
              Home
            </a>
            <a href="timeline" className="nav-link">
              Career Timeline
            </a>
            <a href="projects" className="nav-link">
              Projects
            </a>
            <a href="skills" className="nav-link">
              Skills
            </a>
            <a href="contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/prakharnag" className="nav-link">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/prakhar-nag/" className="nav-link">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:prakharnagwork@gmail.com" className="nav-link">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-icon"
            onClick={handleMenuClick}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-4 py-2 space-y-2">
            <a href="home" className="block nav-link" onClick={handleLinkClick}>
              Home
            </a>
            <a href="timeline" className="block nav-link" onClick={handleLinkClick}>
              Career Timeline
            </a>
            <a href="/projects" className="block nav-link" onClick={handleLinkClick}>
              Projects
            </a>
            <a href="skills" className="block nav-link" onClick={handleLinkClick}>
              Skills
            </a>
            <a href="contact" className="block nav-link" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
