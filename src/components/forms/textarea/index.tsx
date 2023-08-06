import './index.scss';

interface IProps {
  placeholder: string;
  label: string;
}

const TextArea = ({ placeholder, label }: IProps) => {
  return (
    <div className="textarea">
      <label htmlFor="textarea">{label}</label>
      <textarea id="textarea" placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
