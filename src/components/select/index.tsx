import './index.scss';
import { ReactNode, FC, ChangeEvent } from 'react';

interface IProps {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<IProps> = ({
  children,
  htmlFor,
  required,
  name,
  onChange,
}) => {
  return (
    <>
      <label className="selection" htmlFor="">
        {htmlFor}
      </label>
      <div className="select-wrapper">
        <select
          className="select"
          name={name}
          required={required}
          onChange={onChange}
        >
          <option value="">Select an Options</option>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
