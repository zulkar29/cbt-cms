import { ChangeEvent } from 'react';
import './index.scss';

interface IProps {
  type?: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  value?: string | number;
  required?: boolean;
  readOnly?: boolean;
  htmlFor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  min?: string;
  max?: string;
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
  name,
  onChange,
  onBlur,
  min,
  max,
}) => {
  return (
    <div className="text">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        name={name}
        type={type ? type : 'text'}
        id={htmlFor}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
        readOnly={readOnly}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
