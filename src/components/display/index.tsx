import { ReactNode } from 'react';
import Filter from '../filter';
import { ChangeEvent } from 'react';
import './index.scss';

interface propsType {
  handleSearch: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

const Display: React.FC<propsType> = ({ handleSearch, children }) => {
  return (
    <div className="display-area">
      <Filter handleSearch={handleSearch} />
      {children}
    </div>
  );
};

export default Display;
