import { ChangeEvent, useState } from 'react';
import Display from '../../components/display';
import OrderTable from '../../components/order-table';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';

const Delivered = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };
  return (
    <Display>
      <Filter handleDisplayItem={handleDisplayItem} />
      <OrderTable />
      <Pagination />
    </Display>
  );
};

export default Delivered;
