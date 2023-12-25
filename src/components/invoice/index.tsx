import { useState, useEffect } from 'react';
import { IOrder } from '../../interfaces/order';
import { formatDate } from '../date-formate';
import Column from '../table/column';
import './index.scss';

const Invoice = ({ order }: { order: IOrder }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItems, setOrderItems] = useState<any[]>(order?.orderItems?.length > 0 ? order?.orderItems : []);

  useEffect(() => {
    if (order?.coupon) {
      if (order?.coupon?.discount_type === '0') {
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
                  item.regular_price *
                    (order?.coupon.discount_amount / 100),
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
                item.regular_price *
                  (order?.coupon.discount_amount / 100),
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
    <div className="invoice">
      <div className="invoice-header">
        <div className="title">
          <img src="/assets/images/invoice-header.png" alt="invoice" />
        </div>
        <h4 className="customer-details">Customer Details</h4>
        <div className="details">
          <div className="left">
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Phone: {order.mobile} </p>
            <p>Address: {order.address} </p>
          </div>
          <div className="order-details right">
            <p>Order date: {formatDate(order.created_at)}</p>
            <p>Invoice No: GHA-{order.id}</p>
            <p>Order No: {order.id}</p>
          </div>
        </div>
      </div>

      {/* <div className="invoice-body">
        <p>Bill to:</p>
        <p>Iftakher</p>
        <p> House: 12, Road: 01, Block I. Basundhara R/A, Dhaka, Bangladesh </p>
        <p>Email: iftebmw@gmail.com</p>
        <p>Phone: 01976100280</p>
      </div> */}

      <div className="invoice-table">
        <div className="row ">
          <Column className="col-md-2 heading">SL. </Column>
          <Column className="col-md-3 heading">Description</Column>
          <Column className="col-md-2 heading">Attribute</Column>
          <Column className="col-md-1 heading">Qty</Column>
          <Column className="col-md-2 heading">Unit price (BDT)</Column>
          <Column className="col-md-2 heading">Total</Column>
        </div>
        {
          <>
            {orderItems?.length>0 && orderItems?.map((product, index) => (
              <div className="row" key={index}>
                <Column className="col-md-2 heading">{index + 1}</Column>
                <Column className="col-md-3 heading">
                  {product.product_name}
                </Column>
                <Column className="col-md-2 heading">-</Column>
                <Column className="col-md-1 heading">{product.quantity}</Column>
                <Column className="col-md-2 heading">
                  ৳{product.discount_price ?? product.regular_price}
                </Column>
                <Column className="col-md-2 heading">
                  ৳
                  {product.discount_price
                    ? product.discount_price * product.quantity
                    : product.regular_price * product.quantity}
                </Column>
              </div>
            ))}
          </>
        }
        <div className="row">
          <Column className="col-md-8 ">
            <h3>Notes:</h3>
            <p>1.Please check the product carefully before payment.</p>
            <p>
              2.After payment there will be no option for refund & exchange.
            </p>
            <p>3.No claim will be accepted after receiving the product.</p>
          </Column>
          <Column className="col-md-4">
            <div className="summery">
              <div className="row">
                <p className="heading sort-summery">Sub Total</p>
                <p className="heading sort-summery">{`৳${totalPrice}`}</p>
                <p className="heading sort-summery">Shipping cost</p>
                <p className="heading sort-summery">৳00.00</p>
                <p className="heading sort-summery">Coupon Discount</p>
                <p className="heading sort-summery">৳00.00</p>
                <p className="heading sort-summery">Grand Total</p>
                <p className="heading sort-summery">{`৳${totalPrice}`}</p>
              </div>
            </div>
          </Column>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
