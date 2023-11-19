import Row from '../table/row';
import Column from '../table/column';
import Select from '../select';
import CustomIconArea from '../custom-icon-area';
import ViewButton from '../button/view';
import DeleteButton from '../button/delete';
import DownloadButton from '../button/download';
import { IOrder } from '../../interfaces/order';

const OrderTable = ({ orders }: { orders: IOrder[] }) => {
  return (
    <>
      <>
        <Row className="row">
          <Column className="col-md-1">
            <form>
              <input type="checkbox" name="select-all" id="select-all" />
            </form>
          </Column>
          <Column className="col-md-1">Order Num.</Column>
          <Column className="col-md-1">Invoice NO</Column>
          <Column className="col-md-1">Total Amount</Column>
          <Column className="col-md-2">Customer</Column>
          <Column className="col-md-1">Contact No</Column>
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
              <input type="checkbox" name="select" id="select" />
            </Column>
            <Column className="col-md-1">{order.id}</Column>
            <Column className="col-md-1"> </Column>
            <Column className="col-md-1">{`৳${order.final_price}`}</Column>
            <Column className="col-md-2">{order.name}</Column>
            <Column className="col-md-1">01724721383</Column>
            <Column className="col-md-1">{1}</Column>
            <Column className="col-md-1">
              <Select>
                <option selected>Paid</option>
                <option>Unpaid</option>
              </Select>
            </Column>
            <Column className="col-md-1">
              <Select>
                <option
                  selected={order.order_status.toLowerCase() === 'pending'}
                >
                  Pending
                </option>
                <option>Confirm</option>
                <option>Pick Up</option>
                <option>Cancel</option>
                <option>On The Way</option>
                <option>Delivered</option>
              </Select>
            </Column>
            <Column className="col-md-1">web</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <ViewButton href={'/orders/views/1'} />
                <DownloadButton />
                <DeleteButton
                  onClick={() => {
                    console.log('first');
                  }}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </>
    </>
  );
};

export default OrderTable;
