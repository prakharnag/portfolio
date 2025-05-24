import { useCallback } from 'react';
import { playClickSound } from '../utils/sounds';

export const useClickSound = () => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    playClickSound();
  }, []);

  return handleClick;
}; 