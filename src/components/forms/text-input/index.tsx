import './index.scss';

interface IProps {
  placeholder: string;
  label: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  htmlFor: string;
}

const TextInput = ({
  placeholder,
  label,
  defaultValue,
  value,
  required,
  htmlFor,
}: IProps) => {
  return (
    <div className="text">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type="text"
        id={htmlFor}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </div>
  );
};

export default TextInput;
