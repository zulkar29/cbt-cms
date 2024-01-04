import "./index.scss";

interface IProps {
  label: string;
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

const Select: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required,
}) => {
  return (
    <div className="select-text">
      <label htmlFor="select">{label}</label>
      <select
        id="select"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
