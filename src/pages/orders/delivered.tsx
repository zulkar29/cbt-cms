import Display from '../../components/display';
import OrderTable from '../../components/order-table';
import Pagination from '../../components/pagination';

const Delivered = () => {
  return (
    <Display>
      <OrderTable />
      <Pagination />
    </Display>
  );
};

export default Delivered;
