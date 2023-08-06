import './index.scss';

interface IProps {
  placeholder: string;
  label: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  onChange: (file: File | null) => void;
}

const FileInput: React.FC<IProps> = ({
  placeholder,
  label,
  defaultValue,
  value,
  required,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <div className="file">
      <label htmlFor="file">{label}</label>
      <input
        type="file"
        id="file"
        accept=".png, .jpg, .jpeg, .webp"
        onChange={handleChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </div>
  );
};

export default FileInput;
