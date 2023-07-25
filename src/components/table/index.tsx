import React, { ReactNode } from 'react';
import './index.scss';

const Table: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
