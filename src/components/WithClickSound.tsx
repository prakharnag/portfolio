import React from 'react';
import { useClickSound } from '../hooks/useClickSound';

export const withClickSound = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithClickSoundComponent(props: P) {
    const handleClick = useClickSound();

    const handleClickWithSound = (e: React.MouseEvent) => {
      handleClick(e);
      // @ts-ignore - we know the component has an onClick prop
      if (props.onClick) {
        // @ts-ignore
        props.onClick(e);
      }
    };

    return <WrappedComponent {...props} onClick={handleClickWithSound} />;
  };
}; 