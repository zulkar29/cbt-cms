import './index.scss';

interface IProps {
  placeholder: string;
  label: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
}

const TextInput = ({
  placeholder,
  label,
  defaultValue,
  value,
  required,
}: IProps) => {
  return (
    <div className="text">
      <label htmlFor="text">{label}</label>
      <input
        type="text"
        id="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </div>
  );
};

export default TextInput;
