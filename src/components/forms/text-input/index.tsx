import { ChangeEvent } from 'react';
import './index.scss';

interface IProps {
  type?: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  readOnly?: boolean;
  htmlFor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
}

const Input: React.FC<IProps> = ({
  placeholder,
  label,
  type,
  defaultValue,
  value,
  required,
  readOnly,
  htmlFor,
  onChange,
  name,
}) => {
  return (
    <div className="text">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        name={name}
        type={type ? type : 'text'}
        id={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
