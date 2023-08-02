import { useState, useCallback } from 'react';

import './index.scss';
import Chart from '../../components/chart';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="">
      <div className="row">
        <div className="chart-item col-md-6">
          <Chart
            data={data}
            activeIndex={activeIndex}
            activeItem={activeItem}
            handleClick={handleClick}
          />
        </div>
        <div className="chart-item col-md-6">
          <Chart
            data={data}
            activeIndex={activeIndex}
            activeItem={activeItem}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
