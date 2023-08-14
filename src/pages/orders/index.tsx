import Pagination from '../../components/pagination';
import OrderTable from '../../components/order-table';
import Display from '../../components/display';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';

const AllOrders: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <OrderTable />
        <Pagination />
      </Display>
    </div>
  );
};

export default AllOrders;
