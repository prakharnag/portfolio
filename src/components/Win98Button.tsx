import React from 'react';
import { useClickSound } from '../hooks/useClickSound';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface Win98ButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
  title?: string;
}

const Win98Button: React.FC<Win98ButtonProps> = ({ 
  children, 
  className = '', 
  as = 'button',
  onClick,
  ...props 
}) => {
  const handleClick = useClickSound();

  const handleClickWithSound = (e: React.MouseEvent<HTMLElement>) => {
    handleClick(e);
    if (onClick) {
      onClick(e);
    }
  };

  const commonProps = {
    ...props,
    onClick: handleClickWithSound,
    className: `win98-button ${className}`
  };

  if (as === 'a') {
    return (
      <a {...commonProps as AnchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps as ButtonProps}>
      {children}
    </button>
  );
};

export default Win98Button; 