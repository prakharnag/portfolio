'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFolder, FaFolderOpen, FaGithub } from 'react-icons/fa';
import { projects } from './projectsData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});

  // Preload all project images
  useEffect(() => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [project.id]: true
        }));
      };
    });
  }, []);

  const toggleProject = (id: string) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="p-4 bg-[#c0c0c0] h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {!activeProject ? (
          // Show project folders
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="win98-window cursor-pointer"
                onClick={() => toggleProject(project.id)}
              >
                <div className="win98-title-bar flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FaFolder className="w-4 h-4 text-yellow-500" />
                    <span>{project.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Show selected project's content
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="win98-window"
          >
            {(() => {
              const project = projects.find(p => p.id === activeProject);
              if (!project) return null;
              
              return (
                <>
                  <div className="win98-title-bar flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <FaFolderOpen className="w-4 h-4 text-yellow-500" />
                      <span>{project.title}</span>
                    </div>
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="win98-button px-2 py-1 text-xs"
                    >
                      Back
                    </button>
                  </div>
                  <div className="p-4 bg-[#c0c0c0]">
                    <div className="flex justify-center mb-4">
                      <div className="relative" style={{ height: '200px', width: 'auto' }}>
                        {!imagesLoaded[project.id] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#c0c0c0]">
                            <div className="animate-pulse text-sm">Loading...</div>
                          </div>
                        )}
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`h-full w-auto object-contain border-2 border-[#000000] transition-opacity duration-300 ${
                            imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => {
                            setImagesLoaded(prev => ({
                              ...prev,
                              [project.id]: true
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="win98-button text-xs px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm mb-1">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win98-button px-4 py-1 flex items-center space-x-2"
                    >
                      <FaGithub className="text-lg" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
