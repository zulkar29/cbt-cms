import Display from '../../components/display';
import OrderTable from '../../components/order-table';
import Pagination from '../../components/pagination';

const Canceled = () => {
  return (
    <Display>
      <OrderTable />
      <Pagination />
    </Display>
  );
};

export default Canceled;
