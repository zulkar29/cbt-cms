import { ReactNode } from 'react';
import './row.scss';

const Row: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`table-row ${className}`}>{children}</div>;
};

export default Row;
