import React, { ReactNode } from 'react';
import './column.scss';

const Column: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <td className="column">{children}</td>;
};

export default Column;
