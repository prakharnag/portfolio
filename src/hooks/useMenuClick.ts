import { useCallback } from 'react';
import { playClickSound } from '../utils/sounds';

export const useMenuClick = () => {
  const handleMenuClick = useCallback((callback: () => void) => (e: React.MouseEvent) => {
    playClickSound();
    callback();
  }, []);

  return handleMenuClick;
}; 