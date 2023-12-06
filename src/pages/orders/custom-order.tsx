import CardBody from '../../components/card-body';
import { Button } from '../../components/button';
import Input from '../../components/forms/text-input';
import Display from '../../components/display';

const CustomOrder = () => {
  return (
    <div>
      <CardBody header="Custom Order" to="/orders" text="Back" />
      <Display>
        <div>
          <form>
            <div className="row">
              <div className="col-md-5">
                <Input htmlFor="customer" placeholder="Name" />
                <Input htmlFor="email" placeholder="Email" />
                <Input htmlFor="mobile" placeholder="Mobile" />
                <Input htmlFor="address" placeholder="Address" />
                <Input htmlFor="city" placeholder="City" />
                <Input htmlFor="thana" placeholder="Thana" />
              </div>
              <div className="col-md-4">
                <Input htmlFor="customer" placeholder="discount" />
                <Input htmlFor="customer" placeholder="shipping" />
                <Input htmlFor="customer" placeholder="variant" />
              </div>
            </div>
            <Button type="submit">Create Order</Button>
          </form>
        </div>
      </Display>
    </div>
  );
};

export default CustomOrder;
