import './index.scss';

interface IProps {
  iconName: string;
}
const Icon = (props: IProps) => {
  return (
    <img
      className="icon"
      sizes="small"
      color="black"
      src={`/assets/icons/${props.iconName}`}
    />
  );
};

export default Icon;
