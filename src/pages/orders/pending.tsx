import Display from '../../components/display';
import Pagination from '../../components/pagination';
import OrderTable from '../../components/order-table';

const PendingOrders = () => {
  return (
    <div>
      <Display>
        <OrderTable />
        <Pagination />
      </Display>
    </div>
  );
};

export default PendingOrders;
