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
} catch (error) {
  console.error('Error preloading audio:', error);
}

export const playStartupSound = () => {
  if (!isBrowser) return;
  
  if (!startupSound) {
    startupSound = new Audio('/assets/sounds/startup.mp3');
    startupSound.volume = 0.5;
  }
  startupSound.play().catch(error => {
    console.warn('Failed to play startup sound:', error);
  });
};

export const stopStartupSound = () => {
  if (!isBrowser || !startupSound) return;
  
  startupSound.pause();
  startupSound.currentTime = 0;
};

export const playClickSound = () => {
  if (!isBrowser) return;
  
  if (!clickSound) {
    clickSound = new Audio('/assets/sounds/win98-click.mp3');
    clickSound.volume = 0.3;
  }
  
  // Reset the sound to the beginning if it's already playing
  clickSound.currentTime = 0;
  clickSound.play().catch(error => {
    console.warn('Failed to play click sound:', error);
  });
}; 