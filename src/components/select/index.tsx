import './index.scss';
import { ReactNode, FC } from 'react';

interface IProps {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
}

const Select: FC<IProps> = ({ children, htmlFor, required }) => {
  return (
    <>
      <label className="selection" htmlFor="">
        {htmlFor}
      </label>
      <div className="select-wrapper">
        <select className="select" required={required}>
          <option value="">Select an Options</option>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
