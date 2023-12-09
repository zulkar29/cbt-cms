import Row from '../table/row';
import Column from '../table/column';
import Select from '../select';
import CustomIconArea from '../custom-icon-area';
import ViewButton from '../button/view';
import DeleteButton from '../button/delete';
import DownloadButton from '../button/download';
import { IOrder } from '../../interfaces/order';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteOrder, reset, updateOrder } from '../../redux/order/orderSlice';
import { ChangeEvent, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import './index.scss';
import Invoice from '../invoice';
import ReactToPrint from 'react-to-print';
import EditButton from '../button/edit';

interface IProps {
  orders: IOrder[];
  handleAllSelectedOrders?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectedOrder?: (orderId: number) => void;
  selectedOrders?: number[];
}

const OrderTable = ({
  orders,
  handleAllSelectedOrders,
  handleSelectedOrder,
  selectedOrders,
}: IProps) => {
  const dispatch = useAppDispatch();
  const { isUpdate, message } = useAppSelector((state) => state.order);
  const componentRef = useRef<HTMLDivElement>(null);
  // const [invoiceVisible, setInvoiceVisible] = useState(false);
  const handleOrderDelete = (id: number) => {
    dispatch(deleteOrder([id]));
  };

  const handleStatusChange = (
    orderId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      updateOrder({ id: orderId, orderData: { order_status: e.target.value } })
    );
  };

  const handlePaymentChange = (
    orderId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      updateOrder({
        id: orderId,
        orderData: { delivery_method: e.target.value },
      })
    );
  };

  useEffect(() => {
    if (isUpdate) {
      toast.success(`${message}`);
    }
    return () => {
      dispatch(reset());
    };
  }, [isUpdate, dispatch]);

  return (
    <div className="order-table">
      <>
        <Row className="row">
          <Column className="col-md-1">
            <form>
              <input
                type="checkbox"
                name="select-all"
                id="select-all"
                onChange={(e) =>
                  handleAllSelectedOrders
                    ? handleAllSelectedOrders(e)
                    : console.log('first')
                }
              />
            </form>
          </Column>
          <Column className="col-md-1">Order Num.</Column>
          <Column className="col-md-1">Invoice NO</Column>
          <Column className="col-md-1">Total Amount</Column>
          <Column className="col-md-1">Customer</Column>
          <Column className="col-md-2">Contact No</Column>
          <Column className="col-md-1">Num. of Products</Column>
          <Column className="col-md-1">Payment Status</Column>
          <Column className="col-md-1">Delivery Status</Column>
          <Column className="col-md-1">Order From</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
      </>
      <>
        {orders.map((order, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={
                  selectedOrders
                    ? selectedOrders.includes(order.id as number)
                    : false
                }
                onClick={() =>
                  handleSelectedOrder && handleSelectedOrder(order.id as number)
                }
              />
            </Column>
            <Column className="col-md-1">{order.id}</Column>
            <Column className="col-md-1">
              {order.order_Prefix} - {order.id}
            </Column>
            <Column className="col-md-1">{`৳${order.orderItems.reduce(
              (sum, item) => {
                // Check if discount_price is null or 0
                if (item.discount_price === null || item.discount_price === 0) {
                  // Add regular_price * quantity to the sum
                  sum += item.regular_price * item.quantity;
                } else {
                  // Add discount_price * quantity to the sum
                  sum += item.discount_price * item.quantity;
                }
                return sum;
              },
              0
            )}`}</Column>
            <Column className="col-md-1">{order.name}</Column>
            <Column className="col-md-2">{order.mobile}</Column>
            <Column className="col-md-1">{order.total_item}</Column>
            <Column className="col-md-1">
              <Select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handlePaymentChange(order.id, e)
                }
              >
                <option value={'paid'} selected>
                  Paid
                </option>
                <option
                  value={'unpaid'}
                  selected={order.delivery_method == 'unpaid'}
                >
                  Unpaid
                </option>
              </Select>
            </Column>
            <Column className="col-md-1">
              <Select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleStatusChange(order.id, e)
                }
              >
                <option
                  value={'pending'}
                  selected={order?.order_status?.toLowerCase() === 'pending'}
                >
                  Pending
                </option>
                <option
                  value={'confirm'}
                  selected={order?.order_status?.toLowerCase() === 'confirm'}
                >
                  Confirm
                </option>
                <option
                  value={'pickup'}
                  selected={order?.order_status?.toLowerCase() === 'pickup'}
                >
                  Pick Up
                </option>
                <option
                  value={'cancel'}
                  selected={order?.order_status?.toLowerCase() === 'cancel'}
                >
                  Cancel
                </option>
                <option
                  value={'on_the_way'}
                  selected={order?.order_status?.toLowerCase() === 'on_the_way'}
                >
                  On The Way
                </option>
                <option
                  value={'delivered'}
                  selected={order?.order_status?.toLowerCase() === 'delivered'}
                >
                  Delivered
                </option>
              </Select>
            </Column>
            <Column className="col-md-1">{order.order_form}</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <ViewButton href={`/orders/views/${order.id}`} />
                <EditButton editUrl={`/orders/edit/${order.id}`} />
                <ReactToPrint
                  trigger={() => <DownloadButton />}
                  content={() => componentRef.current}
                />
                <DeleteButton onClick={() => handleOrderDelete(order.id)} />
              </CustomIconArea>
            </Column>
            <div className="print-area" ref={componentRef}>
              {<Invoice order={order} />}
            </div>
          </Row>
        ))}
      </>
    </div>
  );
};

export default OrderTable;
