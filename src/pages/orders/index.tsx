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
import { deleteOrder, getOrders, reset } from '../../redux/order/orderSlice';
import { toast } from 'react-toastify';

const AllOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const { orders, isDelete, totalCount } = useAppSelector(
    (state) => state.order
  );
  const [displayItem, setDisplayItem] = useState(10);
  const totalPage = Math.floor(totalCount / displayItem);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const handleAllSelectedOrders = (e: ChangeEvent<HTMLInputElement>) => {
    const productIds = orders.map((order) => Number(order.id));
    if (e.target.checked) {
      setSelectedOrders(productIds);
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectedOrder = (orderId: number) => {
    const selectedOrdersSet = new Set(selectedOrders);

    if (selectedOrdersSet.has(orderId)) {
      selectedOrdersSet.delete(orderId);
    } else {
      selectedOrdersSet.add(orderId);
    }

    setSelectedOrders(Array.from(selectedOrdersSet));
  };
  const handleMultiDelete = () => {
    dispatch(deleteOrder([...selectedOrders]));
  };

  useEffect(() => {
    dispatch(getOrders({ page: pageNumber, limit: displayItem }));
  }, [dispatch, pageNumber, displayItem]);

  useEffect(() => {
    if (isDelete) {
      toast.success('Order deleted successfully');
      dispatch(getOrders({}));
    }
    return () => {
      dispatch(reset());
    };
  }, [isDelete, dispatch]);

  return (
    <div>
      <Display>
        <div className="csv-icon" title="Download CSV">
          <CSVLink data={orders}>
            <BsDownload />
          </CSVLink>
        </div>
        <div className="row filter-action">
          <div className="title">
            <h3>All Orders</h3>
          </div>
        </div>
        <div className="date-area">
          <Input type="date" htmlFor="start-date" label="Start Date" />
          <Input type="date" htmlFor="end-date" label="End Date" />
        </div>
      </Display>
      <Display>
        <Filter
          handleDisplayItem={handleDisplayItem}
          leftElements={
            <div className="action">
              <Overflow title="Bulk Action">
                <div onClick={handleMultiDelete}>Delete Selection</div>
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
            </div>
          }
        />
        <OrderTable
          orders={orders}
          handleAllSelectedOrders={handleAllSelectedOrders}
          handleSelectedOrder={handleSelectedOrder}
          selectedOrders={selectedOrders}
        />
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default AllOrders;
