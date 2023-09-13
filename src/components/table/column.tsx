import React, { ReactNode } from 'react';
import './column.scss';

const Column: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`column ${className}`}>{children}</div>;
};

export default Column;
