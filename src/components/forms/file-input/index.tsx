import { ChangeEvent } from 'react';
import './index.scss';

interface IProps {
  placeholder?: string;
  label: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<IProps> = ({
  placeholder,
  label,
  defaultValue,
  value,
  required,
  name,
  onChange,
}) => {
  return (
    <>
      <div className="file">
        <label htmlFor="file">{label}</label>
        <input
          type="file"
          id="file"
          name={name}
          accept=".png, .jpg, .jpeg, .webp"
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          required={required}
        />
      </div>
    </>
  );
};

export default FileInput;
