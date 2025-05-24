import React from 'react';
import { motion } from 'framer-motion';

const MyStory: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-base text-black font-win98"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#000080]">My Story</h2>
        <div className="space-y-4">
          <p className="leading-6">
            👋 Hey! I'm Prakhar — a software engineer who loves turning ideas into powerful products. 
            My journey began on a dusty old Pentium 4, playing games and wondering: "How the heck are these even made?" 
            That curiosity sparked my passion for coding. 
          </p>
          
          <p className="leading-6">
            Today, I'm a full-stack developer, crafting seamless experiences with TypeScript, React, Node.js, SQL, and Python. 
            With a Master's in Computer Science from Illinois Tech, Chicago, IL, I love tackling complex challenges and turning them into elegant solutions.
          </p>

          <p className="leading-6">
            When I'm not coding, you'll find me strumming my guitar or writing tech articles. 
            Always excited to connect and build something amazing together!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="win98-window p-1">
          <img 
            src="/prakharnag.github.io/assets/images/desktop.jpg" 
            alt="My Desktop Setup" 
            className="w-full h-auto object-cover"
            style={{ 
              maxHeight: '600px',
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.1) brightness(1.05) saturate(0.9)',
              transform: 'scale(0.95)',
              transformOrigin: 'center'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MyStory; 