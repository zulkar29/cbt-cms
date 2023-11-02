import './index.scss';
import { ChangeEvent } from 'react';

interface IProps {
  placeholder?: string;
  label?: string;
  readonly?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextArea = ({
  placeholder,
  label,
  readonly,
  className,
  value,
  required,
  name,
  onChange,
}: IProps) => {
  return (
    <div className="textarea">
      <label htmlFor="textarea">{label}</label>
      <textarea
        id="textarea"
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
      />
    </div>
  );
};

export default TextArea;
