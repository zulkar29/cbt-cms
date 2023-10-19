import Column from '../table/column';
import './index.scss';

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-header">
        <div className="title">
          <img src="/assets/images/invoice-header.png" alt="invoice" />
        </div>
        <h4 className="customer-details">Customer Details</h4>
        <div className="details">
          <div className="left">
            <p>Name: Md Shekh Talha</p>
            <p>Email: info@gazihomeapppance.com</p>
            <p>Phone: +8801766688840 </p>
            <p>Address: 340, Avenue3, Road 5, Mirpur DOHS, Mirpur </p>
          </div>
          <div className="order-details right">
            <p>Order date: 10-08-2023</p>
            <p>Invoice No: GHA-261</p>
            <p>Order No: 20230810-11135133</p>
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
          <Column className="col-md-2 heading">Model</Column>
          <Column className="col-md-1 heading">Qty</Column>
          <Column className="col-md-2 heading">Unit price (BDT)</Column>
          <Column className="col-md-2 heading">Total</Column>
        </div>
        <>
          <div className="row">
            <Column className="col-md-2 heading">01</Column>
            <Column className="col-md-3 heading">
              GA-BGS-30 - Gazi Smiss Gas Stove (LPG)
            </Column>
            <Column className="col-md-2 heading">Depvered</Column>
            <Column className="col-md-1 heading">1</Column>
            <Column className="col-md-2 heading">৳13,500.00</Column>
            <Column className="col-md-2 heading">৳13,500.00</Column>
          </div>
          <div className="row">
            <Column className="col-md-2 heading">01</Column>
            <Column className="col-md-3 heading">
              GA-BGS-30 - Gazi Smiss Gas Stove (LPG)
            </Column>
            <Column className="col-md-2 heading">Depvered</Column>
            <Column className="col-md-1 heading">1</Column>
            <Column className="col-md-2 heading">৳13,500.00</Column>
            <Column className="col-md-2 heading">৳13,500.00</Column>
          </div>
        </>
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
                <p className="heading sort-summery">৳13,500.00</p>
                <p className="heading sort-summery">Shipping cost</p>
                <p className="heading sort-summery">৳00.00</p>
                <p className="heading sort-summery">Total Tax</p>
                <p className="heading sort-summery">৳00.00</p>
                <p className="heading sort-summery">Coupon Discount</p>
                <p className="heading sort-summery">৳00.00</p>
                <p className="heading sort-summery">Grand Total</p>
                <p className="heading sort-summery">৳13,500.00</p>
              </div>
            </div>
          </Column>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
