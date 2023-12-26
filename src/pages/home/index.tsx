import { useState, useEffect } from 'react';
import './index.scss';
// import Chart from '../../components/chart';
import { API_URL } from '../../constants';
import axios from '../../lib';
import { Link } from 'react-router-dom';

/* interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: IData[] = [
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
]; */

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  /* const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (_: IData, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  ); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/dashboards`);

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-md-3">
          <Link to="/orders">
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/checkout.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Total Orders</h5>
                <h3>{data.totalOrder}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/orders/pending">
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/pending.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Pending Orders</h5>
                <h3>{data.totalPendingOrder}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/products">
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/gift.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Total Products</h5>
                <h3>{data.totalOrder}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/customers">
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/people.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Total Customers</h5>
                <h3>{data.totalUser}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to={'/products/stockout'}>
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/out-of-stock.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Stock Out Products</h5>
                <h3>{data.totalOutStock}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to={'/subscriber'}>
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/subscribe.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Subscribers</h5>
                <h3>{data.totalSubscribe}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to={'/blogs'}>
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/blog.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Blogs</h5>
                <h3>{data.totalBlog}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to={'/queries'}>
            <div className="chart-card">
              <div className="img">
                <img src="/assets/images/question.png" alt="cart" />
              </div>
              <div className="info">
                <h5>Queries</h5>
                <h3>{data.totalQuery}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="row">
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
      </div> */}
    </div>
  );
};

export default HomePage;
