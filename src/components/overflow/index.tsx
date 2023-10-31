import './index.scss';
interface IProps {
  title: string;
  children: React.ReactNode;
}
const Overflow: React.FC<IProps> = ({ children, title }) => {
  return (
    <div className="overflow">
      <p className="title">{title}</p>
      <div className="over">{children}</div>
    </div>
  );
};

export default Overflow;
