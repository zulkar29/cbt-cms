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
}) => {
  return (
    <div className="text">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type ? type : 'text'}
        id={htmlFor}
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
