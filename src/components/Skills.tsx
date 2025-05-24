import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', image: '/prakharnag.github.io/assets/images/javascript.png' },
      { name: 'Python', image: '/prakharnag.github.io/assets/images/python.png' },
      { name: 'Java', image: '/prakharnag.github.io/assets/images/java.png' },
      { name: 'Dart', image: '/prakharnag.github.io/assets/images/dart.png' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', image: '/prakharnag.github.io/assets/images/react.png' },
      { name: 'Flutter', image: '/prakharnag.github.io/assets/images/flutter.png' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', image: '/prakharnag.github.io/assets/images/node.png' },
      { name: 'Postman', image: '/prakharnag.github.io/assets/images/postman.png' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', image: '/prakharnag.github.io/assets/images/mongodb.png' },
      { name: 'PostgreSQL', image: '/prakharnag.github.io/assets/images/postgres.png' },
      { name: 'MySQL', image: '/prakharnag.github.io/assets/images/mysql.png' },
      { name: 'Elasticsearch', image: '/prakharnag.github.io/assets/images/elasticsearch.png' }
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', image: '/prakharnag.github.io/assets/images/docker.png' },
      { name: 'AWS', image: '/prakharnag.github.io/assets/images/aws.png' }
    ]
  },
  /*{
    title: 'AI/ML',
    skills: [
      { name: 'AI', image: '/prakharnag.github.io/assets/images/AI.png' }
    ]
  }*/
];

const Skills: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const toggleFolder = (title: string) => {
    setActiveFolder(activeFolder === title ? null : title);
  };

  return (
    <div className="p-4 bg-[#c0c0c0] h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {!activeFolder ? (
          // Show folder list when no folder is selected
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="win98-window cursor-pointer"
                onClick={() => toggleFolder(category.title)}
              >
                <div className="win98-title-bar flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FaFolder className="w-4 h-4 text-yellow-500" />
                    <span>{category.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Show selected folder's content
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="win98-window"
          >
            <div className="win98-title-bar flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaFolderOpen className="w-4 h-4 text-yellow-500" />
                <span>{activeFolder}</span>
              </div>
              <button 
                onClick={() => setActiveFolder(null)}
                className="win98-button px-2 py-1 text-xs"
              >
                Back
              </button>
            </div>
            <div className="p-4 bg-[#c0c0c0]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillCategories
                  .find(cat => cat.title === activeFolder)
                  ?.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="win98-button flex flex-col items-center space-y-2 p-2"
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.name} 
                        className="w-16 h-16 object-contain"
                      />
                      <span className="text-xs text-center">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills;
