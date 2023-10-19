import Logo from '../logo';
import './index.scss';

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-header">
        <div className="title">
          <Logo file="invoiceLogo.png" />
          <h5>INVOICE</h5>
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

      <table className="invoice-table">
        <thead>
          <tr>
            <th>SL. </th>
            <th>Description</th>
            <th>Model</th>
            <th>Qty</th>
            <th>Unit price (BDT)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GA-BGS-30 - Gazi Smiss Gas Stove (LPG)</td>
            <td>Depvered</td>
            <td>1</td>
            <td>৳13,500.00</td>
            <td>৳0.00</td>
            <td>৳13,500.00</td>
          </tr>
        </tbody>
      </table>

      <div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestias aut placeat repellat, labore deserunt ea rem officia omnis
          animi, reiciendis eveniet atque laborum, cumque voluptas impedit
          beatae ut vel necessitatibus quod expedita assumenda odit amet totam.
          Saepe vitae commodi veritatis et atque cupiditate, libero, laboriosam
          doloremque, quisquam enim earum?
        </div>
        <div className="summery">
          <div className="item">
            <p>Sub Total</p>
            <p>৳13,500.00</p>
            <p>Shipping cost</p>
            <p>৳00.00</p>
            <p>Total Tax</p>
            <p>৳00.00</p>
            <p>Coupon Discount</p>
            <p>৳00.00</p>
            <p>Grand Total</p>
            <p>৳13,500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
