import { ReactNode } from 'react';
import { ChangeEvent } from 'react';
import './index.scss';

interface propsType {
  handleSearch?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

const Display: React.FC<propsType> = ({ children }) => {
  return <div className="display-area">{children}</div>;
};

export default Display;
