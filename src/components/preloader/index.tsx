import './style.scss';
import React from 'react';

type PreloaderProps = {
  size?: number;
  color?: string;
}

const Preloader: React.FC<PreloaderProps> = ({ size = 80, color = '#000000' }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    border: `solid ${color}`,
    borderRadius: '50%',
    borderTopColor: 'transparent',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="preloader" style={style} />
  );
};

export default Preloader;
