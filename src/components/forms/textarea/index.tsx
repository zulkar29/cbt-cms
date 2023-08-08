import './index.scss';

interface IProps {
  placeholder?: string;
  label?: string;
  readonly?: boolean;
  required?: boolean;
  className?: string;
  value?: string | number;
}

const TextArea = ({
  placeholder,
  label,
  readonly,
  className,
  value,
  required,
}: IProps) => {
  return (
    <div className="textarea">
      <label htmlFor="textarea">{label}</label>
      <textarea
        id="textarea"
        value={value}
        className={className}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
      />
    </div>
  );
};

export default TextArea;
