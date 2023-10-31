import Row from '../table/row';
import Column from '../table/column';
import Select from '../select';
import CustomIconArea from '../custom-icon-area';
import ViewButton from '../button/view';
import DeleteButton from '../button/delete';
import DownloadButton from '../button/download';

const OrderTable = () => {
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
          <Column className="col-md-2">Contact No</Column>
          <Column className="col-md-1">Num. of Products</Column>
          <Column className="col-md-1">Payment Status</Column>
          <Column className="col-md-1">Delivery Status</Column>
          <Column className="col-md-1">Order From</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
      </>
      <>
        {[...Array(10).keys()].map((_order, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">
              <input type="checkbox" name="select" id="select" />
            </Column>
            <Column className="col-md-1">1762</Column>
            <Column className="col-md-1"> GHA-1201</Column>
            <Column className="col-md-1">৳3,240.00</Column>
            <Column className="col-md-2">Mohammad bin Rashed</Column>
            <Column className="col-md-1">01724721383</Column>
            <Column className="col-md-1">4</Column>
            <Column className="col-md-1">
              <Select>
                <option selected>Paid</option>
                <option>Unpaid</option>
              </Select>
            </Column>
            <Column className="col-md-1">
              <Select>
                <option selected>Pending</option>
                <option>Confirm</option>
                <option>Pick Up</option>
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
