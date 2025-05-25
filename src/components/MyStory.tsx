import React from 'react';
import { motion } from 'framer-motion';

const MyStory: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#008080] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12">
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
            <img 
              src="/assets/images/desktop.jpg" 
              alt="My Desktop Setup" 
              className="w-full h-auto object-cover"
              style={{ 
                maxHeight: '600px',
                imageRendering: 'pixelated',
                filter: 'contrast(1.5) brightness(0.75) saturate(0.5) sepia(0.4) grayscale(0.3) hue-rotate(-8deg) blur(0.3px)',
                transform: 'scale(0.98)',
                transformOrigin: 'center',
                border: '2px solid #c0c0c0',
                boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff',
                objectFit: 'cover',
                backgroundColor: '#c0c0c0',
                padding: '2px',
                mixBlendMode: 'multiply'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyStory; 