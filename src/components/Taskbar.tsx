'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaFileAlt } from 'react-icons/fa';
import { Code, Briefcase, Clock, LogOut, MessageCircle, FileText, Mail } from 'lucide-react';
import Window from './Window';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Contact from './Contact';
import Win98Button from './Win98Button';
import { useMenuClick } from '../hooks/useMenuClick';
import Conversation from './Conversation';

interface TaskbarProps {
  onLogout: () => void;
}

interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  isOpen: boolean;
  component: React.ReactNode;
}

const Taskbar: React.FC<TaskbarProps> = ({ onLogout }) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'projects',
      title: 'My Projects',
      icon: <Briefcase className="w-4 h-4" />,
      isMinimized: false,
      isMaximized: false,
      isOpen: false,
      component: <Projects />
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: <Code className="w-4 h-4" />,
      isMinimized: false,
      isMaximized: false,
      isOpen: false,
      component: <Skills />
    },
    {
      id: 'conversation',
      title: 'Chat with Prakhar',
      icon: <MessageCircle className="w-4 h-4" />,
      isMinimized: false,
      isMaximized: false,
      isOpen: false,
      component: <Conversation />
    },
    {
      id: 'contact',
      title: 'Contact Me',
      icon: <Mail className="w-4 h-4" />,
      isMinimized: false,
      isMaximized: false,
      isOpen: false,
      component: <Contact />
    }
  ]);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuClick = useMenuClick();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWindowAction = (id: string, action: 'open' | 'minimize' | 'maximize' | 'close') => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        switch (action) {
          case 'open':
            return { ...window, isOpen: true, isMinimized: false };
          case 'minimize':
            return { ...window, isMinimized: !window.isMinimized };
          case 'maximize':
            return { ...window, isMaximized: !window.isMaximized };
          case 'close':
            return { ...window, isOpen: false };
          default:
            return window;
        }
      }
      return window;
    }));
    setIsStartMenuOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#c0c0c0] border-t-2 border-[#000000] z-50">
        <div className="flex items-center h-12 px-2 overflow-x-auto">
          {/* Start Button */}
          <div className="relative flex-shrink-0" ref={menuRef}>
            <Win98Button
              onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
              className="flex items-center space-x-1 px-2 h-8"
            >
              <img 
                src="/assets/icons/start.png" 
                alt="Windows Logo" 
                className="w-4 h-4 mr-1"
              />
              <span className="hidden sm:inline">Start</span>
            </Win98Button>

            {/* Start Menu */}
            <AnimatePresence>
              {isStartMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-12 left-0 win98-window min-w-[200px] z-50"
                >
                  <div className="win98-title-bar">
                    <span>Start Menu</span>
                  </div>
                  <div className="p-1">
                    <div
                      onClick={handleMenuClick(() => handleWindowAction('skills', 'open'))}
                      className="win98-menu-item flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Skills
                    </div>
                    <div
                      onClick={handleMenuClick(() => handleWindowAction('projects', 'open'))}
                      className="win98-menu-item flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Projects
                    </div>
                    <div
                      onClick={handleMenuClick(() => handleWindowAction('contact', 'open'))}
                      className="win98-menu-item flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </div>
                    <div
                      onClick={handleMenuClick(() => window.open(process.env.NEXT_PUBLIC_RESUME_URL, '_blank'))}
                      className="win98-menu-item flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Resume
                    </div>
                    <div className="border-t border-[#808080] my-1"></div>
                    <div
                      onClick={handleMenuClick(() => onLogout())}
                      className="win98-menu-item flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      ShutDown
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Access Icons */}
          <div className="flex items-center ml-2 space-x-1 flex-shrink-0">
            <Win98Button
              onClick={() => handleWindowAction('skills', 'open')}
              className="win98-button h-8 w-8 p-0 flex items-center justify-center"
              aria-label="Technical Skills"
              title="Technical Skills"
            >
              <Code className="w-4 h-4" aria-hidden="true" />
            </Win98Button>
            <Win98Button
              onClick={() => handleWindowAction('projects', 'open')}
              className="win98-button h-8 w-8 p-0 flex items-center justify-center"
              aria-label="My Projects"
              title="My Projects"
            >
              <Briefcase className="w-4 h-4" aria-hidden="true" />
            </Win98Button>
            <Win98Button
              onClick={() => handleWindowAction('contact', 'open')}
              className="win98-button h-8 w-8 p-0 flex items-center justify-center"
              aria-label="Contact Me"
              title="Contact Me"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </Win98Button>
            <Win98Button
              onClick={() => handleWindowAction('conversation', 'open')}
              className="win98-button px-4 py-1 flex items-center space-x-2 hidden sm:flex"
              aria-label="Chat with Prakhar"
              title="Chat with Prakhar"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Chat with Prakhar</span>
            </Win98Button>
            <Win98Button
              onClick={() => handleWindowAction('conversation', 'open')}
              className="win98-button h-8 w-8 p-0 flex items-center justify-center sm:hidden"
              aria-label="Chat with Prakhar"
              title="Chat with Prakhar"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </Win98Button>
            <Win98Button
              onClick={onLogout}
              className="win98-button h-8 w-8 p-0 flex items-center justify-center"
              aria-label="Shut Down"
              title="Shut Down"
            >
              <LogOut className="w-4 h-4" aria-hidden="true" />
            </Win98Button>
          </div>

          {/* Window Buttons */}
          <div className="flex space-x-2 ml-4 overflow-x-auto flex-1 min-w-0">
            {windows.map(window => (
              window.isOpen && (
                <Win98Button
                  key={window.id}
                  onClick={() => handleWindowAction(window.id, window.isMinimized ? 'open' : 'minimize')}
                  className={`win98-button px-3 py-1 flex items-center space-x-2 flex-shrink-0 ${
                    !window.isMinimized ? 'bg-[#000080] text-white' : ''
                  }`}
                  title={window.title}
                >
                  {window.icon}
                  <span className="hidden sm:inline">{window.title}</span>
                </Win98Button>
              )
            ))}
          </div>

          {/* Social Links and Clock */}
          <div className="ml-auto flex items-center space-x-2 flex-shrink-0">
            <Win98Button
              as="a"
              href="https://github.com/prakharnag"
              target="_blank"
              rel="noopener noreferrer"
              className="win98-button p-2 hidden sm:block"
              title="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </Win98Button>
            <Win98Button
              as="a"
              href="https://www.linkedin.com/in/prakhar-nag/"
              target="_blank"
              rel="noopener noreferrer"
              className="win98-button p-2 hidden sm:block"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </Win98Button>
            <Win98Button
              as="a"
              href="https://medium.com/@prakharnag98"
              target="_blank"
              rel="noopener noreferrer"
              className="win98-button p-2 hidden sm:block"
              title="Medium Blog"
            >
              <FaMedium className="text-xl" />
            </Win98Button>
            <Win98Button
              className="win98-button h-8 px-2 flex items-center"
              title="Current Time"
            >
              <Clock className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">{currentTime.toLocaleTimeString()}</span>
              <span className="sm:hidden">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </Win98Button>
          </div>
        </div>
      </div>

      {windows.map((window, index) => (
        window.isOpen && (
          <Window
            key={window.id}
            title={window.title}
            icon={window.icon}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onMinimize={() => handleWindowAction(window.id, 'minimize')}
            onMaximize={() => handleWindowAction(window.id, 'maximize')}
            onClose={() => handleWindowAction(window.id, 'close')}
            zIndex={1000 + index}
            className={window.id === 'conversation' ? 'p-0' : ''}
          >
            {window.component}
          </Window>
        )
      ))}
    </>
  );
};

export default Taskbar; 