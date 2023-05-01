import React from 'react';

type TextProps = {
  variant?: 'default' | 'primary' | 'secondary' | 'highlight';
  color?: string;
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant = 'default', color, className, children }) => {
  const style = {
    color: color || '',
    fontWeight: variant === 'highlight' ? 'bold' : undefined,
  };

  return (
    <span className={`text ${variant} ${className}`} style={style}>
      {children}
    </span>
  );
};

export default Text;
