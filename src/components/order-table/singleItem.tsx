import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Column from '../table/column';
import { IOrder } from '../../interfaces/order';
import CustomIconArea from '../custom-icon-area';
import ViewButton from '../button/view';
import EditButton from '../button/edit';
import ReactToPrint from 'react-to-print';
import DownloadButton from '../button/download';
import Select from '../select';
import DeleteButton from '../button/delete';
import Invoice from '../invoice';
import './index.scss';
import Row from '../table/row';

type IProps = {
  order: IOrder;
  selectedOrders?: number[];
  handleSelectedOrder?: (orderId: number) => void;
  handlePaymentChange: (
    orderId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => void;
  handleStatusChange: (
    orderId: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => void;
  handleOrderDelete: (id: number) => void;
};

const SingleItem: FC<IProps> = ({
  order,
  selectedOrders,
  handleSelectedOrder,
  handlePaymentChange,
  handleStatusChange,
  handleOrderDelete,
}: IProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItems, setOrderItems] = useState(order?.orderItems || []);

  useEffect(() => {
    if (order?.coupon) {
      if (order?.coupon?.discount_type === 'flat') {
        let tempDisCart = order?.orderItems;
        if (order?.coupon?.product_id) {
          let tempIdsArr: any[] = [];
          if (order?.coupon?.product_id?.split(',')?.length > 0) {
            tempIdsArr = order?.coupon?.product_id?.split(',');
          } else {
            tempIdsArr = [order?.coupon?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                discount_price:
                  item.regular_price - order?.coupon?.discount_amount,
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              discount_price:
                item.regular_price - order?.coupon?.discount_amount,
            };
          });
        }
        setOrderItems(tempDisCart);
      } else {
        let tempDisCart = order?.orderItems;
        if (order?.coupon?.product_id) {
          let tempIdsArr: any[] = [];
          if (order?.coupon?.product_id?.split(',')?.length > 0) {
            tempIdsArr = order?.coupon?.product_id?.split(',');
          } else {
            tempIdsArr = [order?.coupon?.product_id];
          }
          tempDisCart = tempDisCart?.map((item: any) => {
            if (tempIdsArr.find((element) => element == item.product_id)) {
              return {
                ...item,
                discount_price:
                  item.regular_price -
                  item.regular_price * (order?.coupon.discount_amount / 100),
              };
            }
            return item;
          });
        } else {
          tempDisCart = tempDisCart?.map((item: any) => {
            return {
              ...item,
              discount_price:
                item.regular_price -
                item.regular_price * (order?.coupon.discount_amount / 100),
            };
          });
        }
        setOrderItems(tempDisCart);
      }
    }
  }, [order]);

  useEffect(() => {
    if (orderItems?.length > 0) {
      if (order?.coupon) {
        let finalPrice = 0;
        orderItems?.map((item: any) => {
          finalPrice += item?.discount_price * item?.quantity;
        });
        setTotalPrice(finalPrice);
      } else {
        let finalPrice = 0;
        orderItems?.map((item: any) => {
          finalPrice += item?.discount_price
            ? item?.discount_price
            : item?.regular_price * item?.quantity;
        });
        setTotalPrice(finalPrice);
      }
    }
  }, [order, orderItems]);

  return (
    <>
      <Row className="row">
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
          <div className="sudo">{order.id}</div>
        </Column>
        <Column className="col-md-1">
          {order.order_prefix} - {order.id}
        </Column>
        <Column className="col-md-1">{`৳${totalPrice}`}</Column>
        <Column className="col-md-1">{order.name}</Column>
        <Column className="col-md-2">{order.mobile}</Column>
        <Column className="col-md-1">{order.orderItems?.length}</Column>
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
        <Column className="col-md-2">
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
    </>
  );
};

export default SingleItem;
