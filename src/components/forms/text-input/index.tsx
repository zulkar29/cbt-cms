import './index.scss';

interface IProps {
  placeholder: string;
  label: string;
  defaultValue?: string;
  value?: string;
}

const TextInput = ({ placeholder, label, defaultValue, value }: IProps) => {
  return (
    <div className="text">
      <label htmlFor="text">{label}</label>
      <input
        type="text"
        id="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  );
};

export default TextInput;
