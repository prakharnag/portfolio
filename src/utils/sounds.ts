let startupAudio: HTMLAudioElement | null = null;
let clickAudio: HTMLAudioElement | null = null;

// Preload audio files
const preloadAudio = (url: string): HTMLAudioElement => {
  const audio = new Audio(url);
  audio.preload = 'auto';
  return audio;
};

// Initialize audio files
try {
  startupAudio = preloadAudio('/assets/sounds/win98-startup.mp3');
  clickAudio = preloadAudio('/assets/sounds/win98-click.mp3');
} catch (error) {
  console.error('Error preloading audio:', error);
}

export const playStartupSound = () => {
  try {
    if (startupAudio) {
      startupAudio.volume = 0.3;
      startupAudio.loop = false;
      startupAudio.currentTime = 0;
      startupAudio.play().catch(error => {
        console.error('Startup sound playback failed:', error);
      });
    }
  } catch (error) {
    console.error('Error playing startup sound:', error);
  }
};

export const stopStartupSound = () => {
  if (startupAudio) {
    // Fade out over 1 second
    const fadeOutInterval = setInterval(() => {
      if (startupAudio && startupAudio.volume > 0.01) {
        startupAudio.volume = Math.max(0, startupAudio.volume - 0.01);
      } else {
        clearInterval(fadeOutInterval);
        if (startupAudio) {
          startupAudio.pause();
          startupAudio.currentTime = 0;
        }
      }
    }, 20);
  }
};

export const playClickSound = () => {
  try {
    if (clickAudio) {
      clickAudio.volume = 0.2;
      clickAudio.currentTime = 0;
      clickAudio.play().catch(error => {
        console.error('Click sound playback failed:', error);
      });
    }
  } catch (error) {
    console.error('Error playing click sound:', error);
  }
}; 