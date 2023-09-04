import './index.scss';
import { ChangeEvent } from 'react';

interface IProps {
  placeholder?: string;
  label?: string;
  readonly?: boolean;
  required?: boolean;
  className?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
}

const TextArea = ({
  placeholder,
  label,
  readonly,
  className,
  value,
  required,
  onChange,
  name,
}: IProps) => {
  return (
    <div className="textarea">
      <label htmlFor="textarea">{label}</label>
      <textarea
        id="textarea"
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
