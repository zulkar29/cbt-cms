import CardBody from '../../components/card-body';
import { Button } from '../../components/button';
import Input from '../../components/forms/text-input';
import Display from '../../components/display';
import './custom-order.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '../../redux/products/product-slice';
import { useAppSelector } from '../../redux/hooks';

const CustomOrder = () => {
  const { products } = useAppSelector((state) => state.product);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [thana, setThana] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [varient, setVarient] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts({});
  }, []);

  return (
    <div>
      <CardBody header="Custom Order" to="/orders" text="Back" />
      <Display>
        <div>
          <form>
            <div className="row">
              <div className="col-md-5 custom-item">
                <Input
                  htmlFor="customer"
                  placeholder="Name"
                  onBlur={(e) => setName(e.target.value)}
                />
                <Input
                  htmlFor="email"
                  placeholder="Email"
                  onBlur={(e) => setEmail(e.target.value)}
                />
                <Input
                  htmlFor="mobile"
                  placeholder="Mobile"
                  onBlur={(e) => setMobile(e.target.value)}
                />
                <Input
                  htmlFor="address"
                  placeholder="Address"
                  onBlur={(e) => setAddress(e.target.value)}
                />
                <Input
                  htmlFor="city"
                  placeholder="City"
                  onBlur={(e) => setCity(e.target.value)}
                />
                <Input
                  htmlFor="thana"
                  placeholder="Thana"
                  onBlur={(e) => setThana(e.target.value)}
                />
              </div>
              <div className="col-md-4 custom-item">
                <Input htmlFor="discount" placeholder="discount" />
                <Input htmlFor="shipping" placeholder="shipping" />
                <Input htmlFor="variant" placeholder="variant" />
                <div>
                  <Input
                    htmlFor="search"
                    placeholder="Search Product"
                    onChange={(e) => setSearch(e.target.value)}
                    onBlur={() => setIsFocus(false)}
                    onFocus={() => setIsFocus(true)}
                  />
                  {isFocus && <div>Something</div>}
                </div>
              </div>
              <div className="col-md-3 custom-item">Summery</div>
            </div>
            <Button type="submit">Create Order</Button>
          </form>
        </div>
      </Display>
    </div>
  );
};

export default CustomOrder;
