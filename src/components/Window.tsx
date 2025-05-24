import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from 'react-icons/fa';

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  children: React.ReactNode;
  zIndex: number;
  className?: string;
}

const Window: React.FC<WindowProps> = ({
  title,
  icon,
  isMinimized,
  isMaximized,
  onMinimize,
  onMaximize,
  onClose,
  children,
  zIndex,
  className = ''
}) => {
  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          style={{ zIndex }}
        >
          <motion.div
            className={`win98-window ${isMaximized ? 'w-screen h-screen' : 'max-w-4xl w-full max-h-[80vh]'}`}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
            <div className="win98-title-bar flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {icon}
                <span>{title}</span>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={onMinimize}
                  className="win98-button w-6 h-6 flex items-center justify-center"
                >
                  <FaWindowMinimize className="w-3 h-3" />
                </button>
                <button
                  onClick={onMaximize}
                  className="win98-button w-6 h-6 flex items-center justify-center"
                >
                  <FaWindowMaximize className="w-3 h-3" />
                </button>
                <button
                  onClick={onClose}
                  className="win98-button w-6 h-6 flex items-center justify-center"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className={`bg-[#c0c0c0] overflow-y-auto max-h-[calc(80vh-40px)] ${className}`}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window; 