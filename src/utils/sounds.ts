let startupSound: HTMLAudioElement | null = null;
let clickSound: HTMLAudioElement | null = null;

const isBrowser = typeof window !== 'undefined';

// Preload audio files
const preloadAudio = (url: string): HTMLAudioElement => {
  const audio = new Audio(url);
  audio.preload = 'auto';
  return audio;
};

// Initialize audio files
try {
  startupSound = preloadAudio('/assets/sounds/win98-startup.mp3');
  clickSound = preloadAudio('/assets/sounds/win98-click.mp3');
  // Ensure click sound is loaded
  if (clickSound) {
    clickSound.load();
  }
} catch (error) {
  console.error('Error preloading audio:', error);
}

export const playStartupSound = () => {
  if (!startupSound) {
    startupSound = new Audio('/assets/sounds/win98-startup.mp3');
    startupSound.volume = 0.3;
  }
  startupSound.play().catch(error => {
    console.warn('Failed to play startup sound:', error);
  });
};

export const stopStartupSound = () => {
  if (startupSound) {
    startupSound.pause();
    startupSound.currentTime = 0;
  }
};

export const playClickSound = () => {
  if (!clickSound) {
    clickSound = new Audio('/assets/sounds/win98-click.mp3');
    clickSound.volume = 0.3;
    clickSound.load();
  }
  
  // Create a new instance for each click to ensure immediate playback
  const click = new Audio('/assets/sounds/win98-click.mp3');
  click.volume = 0.3;
  click.play().catch(error => {
    console.warn('Failed to play click sound:', error);
  });
}; 