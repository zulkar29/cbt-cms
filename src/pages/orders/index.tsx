import Pagination from '../../components/pagination';
import OrderTable from '../../components/order-table';
import Display from '../../components/display';
import Filter from '../../components/filter';
import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../components/forms/text-input';
import { BsDownload } from 'react-icons/bs';
import { CSVLink } from 'react-csv';
import './index.scss';
import Overflow from '../../components/overflow';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getOrders } from '../../redux/order/orderSlice';

const AllOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.order);
  const [displayItem, setDisplayItem] = useState(10);
  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];

  useEffect(() => {
    dispatch(getOrders({}));
  }, [dispatch]);

  return (
    <div>
      <Display>
        <div className="csv-icon" title="Download CSV">
          <CSVLink data={csvData}>
            <BsDownload />
          </CSVLink>
        </div>
        <div className="row filter-action">
          <div className="title">
            <h3>All Orders</h3>
          </div>
          <div className="action">
            <Overflow title="Bulk Action">
              <div>Delete Selection</div>
            </Overflow>
            <Overflow title="Filter by status">
              <div>
                <p>Pending</p>
              </div>
              <div>
                <p>Confirmed</p>
              </div>
              <div>
                <p>Pick Up</p>
              </div>
              <div>
                <p>On The Way</p>
              </div>
            </Overflow>
            <input className="search" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="date-area">
          <Input type="date" htmlFor="start-date" label="Start Date" />
          <Input type="date" htmlFor="end-date" label="End Date" />
        </div>
      </Display>
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <OrderTable orders={orders} />
        <Pagination />
      </Display>
    </div>
  );
};

export default AllOrders;
