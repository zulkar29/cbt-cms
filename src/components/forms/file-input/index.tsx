import { ChangeEvent } from 'react';
import './index.scss';

interface IProps {
  placeholder?: string;
  label: string;
  defaultValue?: string;
  ref?: React.RefObject<HTMLInputElement>;
  name?: string;
  value?: string;
  required?: boolean;
  multiple?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<IProps> = ({
  placeholder,
  label,
  defaultValue,
  value,
  required,
  name,
  onChange,
  ref,
  multiple,
}) => {
  return (
    <>
      <div className="file">
        <label htmlFor="file">{label}</label>
        <input
          type="file"
          id="file"
          ref={ref}
          name={name}
          accept=".png, .jpg, .jpeg, .webp"
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          required={required}
          multiple={multiple}
        />
      </div>
    </>
  );
};

export default FileInput;
