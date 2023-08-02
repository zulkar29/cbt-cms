import Display from '../../components/display';
import Pagination from '../../components/pagination';
import OrderTable from '../../components/order-table';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';

const PendingOrders = () => {
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

export default PendingOrders;
