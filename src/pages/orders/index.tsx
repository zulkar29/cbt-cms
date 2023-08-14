import Pagination from '../../components/pagination';
import OrderTable from '../../components/order-table';
import Display from '../../components/display';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';
import Input from '../../components/forms/text-input';
import { BsDownload } from 'react-icons/bs';
import { CSVLink } from 'react-csv';
import './index.scss';

const AllOrders: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);
  console.log(displayItem);
  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];

  return (
    <div>
      <Display>
        <div className="csv-icon" title="Download CSV">
          <CSVLink data={csvData}>
            <BsDownload />
          </CSVLink>
        </div>
        <div className="date-area">
          <Input type="date" htmlFor="start-date" label="Start Date" />
          <Input type="date" htmlFor="end-date" label="End Date" />
        </div>
        <Filter handleDisplayItem={handleDisplayItem} />
        <OrderTable />
        <Pagination />
      </Display>
    </div>
  );
};

export default AllOrders;
