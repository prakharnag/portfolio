import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playStartupSound, stopStartupSound } from '../utils/sounds';
import { useClickSound } from '../hooks/useClickSound';

interface StartupScreenProps {
  onComplete?: () => void;
}

const StartupScreen: React.FC<StartupScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [shouldPlayStartup, setShouldPlayStartup] = useState(false);
  const [shouldComplete, setShouldComplete] = useState(false);
  const handleClick = useClickSound();

  useEffect(() => {
    if (shouldPlayStartup) {
      playStartupSound();
      setShouldPlayStartup(false);
    }
  }, [shouldPlayStartup]);

  useEffect(() => {
    if (shouldComplete && onComplete) {
      onComplete();
    }
  }, [shouldComplete, onComplete]);

  useEffect(() => {
    if (!hasStarted) return;

    // Simulate Windows 98 startup sequence
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          // First transition to desktop
          setShouldComplete(true);
          // Then stop the sound after a short delay
          setTimeout(() => {
            stopStartupSound();
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(loadingInterval);
    };
  }, [hasStarted]);

  const handleStart = (e: React.MouseEvent) => {
    handleClick(e);
    setShouldPlayStartup(true);
    setHasStarted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#000080] cursor-[url('/prakharnag.github.io/assets/cursors/win98-cursor.png'),_auto]"
      >
        {!hasStarted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="win98-window max-w-md mx-auto"
          >
            <div className="win98-title-bar">
              <span>Welcome to Windows 98</span>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#000080] mb-4">Welcome to My Portfolio</h2>
              <p className="text-gray-800 mb-6">
                Click Start to begin your Windows 98 experience
              </p>
              <motion.button
                onClick={handleStart}
                className="win98-button px-6 py-2 cursor-[url('/prakharnag.github.io/assets/cursors/win98-cursor-pointer.png'),_pointer]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src="https://imagizer.imageshack.com/img923/623/o1YQTc.png"
                alt="Prakhar Nag"
                className="w-32 h-32 mx-auto mb-4"
              />
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-white mb-2"
              >
                Prakhar Nag
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/80"
              >
                Software Engineer
              </motion.p>
            </div>
            <div className="win98-window max-w-md mx-auto p-4">
              <div className="win98-title-bar mb-2">
                <span>Starting Up...</span>
              </div>
              <div className="bg-white p-4">
                <div className="h-4 bg-[#c0c0c0] relative overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-0 left-0 h-full bg-[#000080]"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {loadingProgress < 30 && "Initializing system..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Loading portfolio components..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Preparing Windows 98 environment..."}
                  {loadingProgress >= 90 && "Almost ready..."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StartupScreen; 