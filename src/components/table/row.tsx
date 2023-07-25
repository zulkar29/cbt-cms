import { ReactNode } from 'react';
import './row.scss';

const Row: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};

export default Row;
