import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';

interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface IProps {
  handleClick: (entry: IData, index: number) => void;
  data: IData[];
  activeIndex: number;
  activeItem: IData;
}
const Chart: React.FC<IProps> = ({
  handleClick,
  data,
  activeItem,
  activeIndex,
}) => {
  return (
    <div className="chart-card" style={{ width: '100%' }}>
      <p>Click each rectangle </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((_, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
    </div>
  );
};

export default Chart;
