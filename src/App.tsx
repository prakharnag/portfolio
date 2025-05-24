import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import StartupScreen from './components/StartupScreen';
import MyStory from './components/MyStory';


const App: React.FC = () => {
  const [isStartupComplete, setIsStartupComplete] = useState(false);
  const handleLogout = () => {
    setIsStartupComplete(false);
  };

  return (
    <div className="min-h-screen bg-[#008080]">
      {!isStartupComplete ? (
        <StartupScreen onComplete={() => setIsStartupComplete(true)} />
      ) : (
        <>
          <main className="flex-grow pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <MyStory />
            </div>
          </main>
          <Taskbar onLogout={handleLogout} />
        </>
      )}
    </div>
  );
};

export default App;
