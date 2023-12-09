import CardBody from '../../components/card-body';
import { Button } from '../../components/button';
import Input from '../../components/forms/text-input';
import Display from '../../components/display';
import './custom-order.scss';
import { useEffect, useRef, useState } from 'react';
import { getProducts, reset } from '../../redux/products/product-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleOrder } from '../../interfaces/order';
import { IProduct } from '../../interfaces/product';

const UpdateOrder = () => {
  const { slug } = useParams();
  const { products } = useAppSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [thana, setThana] = useState('');
  const [quantity, setQuantity] = useState(0);
  // const [discount, setDiscount] = useState(0);
  // const [shipping, setShipping] = useState(0);
  const [orderItems, setOrderItems] = useState<ISingleOrder[]>([]);
  const [final_price, setFinalPrice] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useState('');
  const productAreaRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const orderData = {
    name,
    email,
    mobile,
    address,
    city,
    thana,
  };

  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.patch(`${API_URL}/orders/${slug}`, orderData).then((res) => {
        toast.success(`${res.data.message}`);
        navigate('/orders');
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProducts({ search: search, page: 1, limit: 30 }));

    return () => {
      dispatch(reset());
    };
  }, [search, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productAreaRef.current &&
        !productAreaRef.current.contains(event.target as Node)
      ) {
        setIsFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFocus]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/orders/${slug}`);
        const data = response.data.data;

        // Set state values based on the fetched data
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setAddress(data.address);
        setCity(data.city);
        setThana(data.thana);
        setFinalPrice(data.final_price);
        setOrderItems(data.orderItems);
        setQuantity(data.quantity);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, [slug, loading]);

  const handleIncrementOrderItem = async (data: ISingleOrder) => {
    const orderId = data.id;

    try {
      setLoading(true);

      // Update order item quantity
      await axios.patch(`${API_URL}/order-items/${orderId}`, {
        quantity: data.quantity + 1,
      });

      // Update order final price
      await axios.patch(`${API_URL}/orders/${slug}`, {
        final_price: final_price + data.discount_price,
      });

      // Handle success if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDecrementOrderItem = async (data: ISingleOrder) => {
    const orderId = data.id;

    try {
      setLoading(true);

      // Update order item quantity
      await axios.patch(`${API_URL}/order-items/${orderId}`, {
        quantity: data.quantity - 1,
      });

      // Update order final price
      await axios.patch(`${API_URL}/orders/${slug}`, {
        final_price: final_price - data.discount_price,
      });

      // Handle success if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveOrderItem = async (data: ISingleOrder) => {
    const orderId = data.id;

    try {
      setLoading(true);

      // Delete order item quantity
      await axios.delete(`${API_URL}/order-items/?ids=[${orderId}]`);

      // Update order final price
      await axios.patch(`${API_URL}/orders/${slug}`, {
        final_price: final_price - data.discount_price * data.quantity,
        quantity: quantity - 1,
      });

      // Handle success if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const addOrderItem = async (data: IProduct) => {
    const itemData = {
      order_id: slug,
      product_id: data.id,
      product_name: data.title,
      quantity: 1,
      regular_price: data.regular_price,
      discount_price: data.discount_price,
    };
    try {
      setLoading(true);
      await axios.post(`${API_URL}/order-items`, itemData).then(() => {
        toast.success('Product added successfully');
      });
      // Total price updated
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CardBody header="Update Order" to="/orders" text="Back" />
      <Display>
        <div>
          <form onSubmit={handleOrder}>
            <div className="row">
              <div className="col-md-5 custom-item">
                <Input
                  htmlFor="customer"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  htmlFor="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  htmlFor="mobile"
                  value={mobile}
                  placeholder="Mobile"
                  onChange={(e) => setMobile(e.target.value)}
                />
                <Input
                  htmlFor="address"
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  htmlFor="city"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  htmlFor="thana"
                  value={thana}
                  placeholder="Thana"
                  onChange={(e) => setThana(e.target.value)}
                />
              </div>
              <div className="col-md-4 custom-item">
                {/*  <Input
                  htmlFor="discount"
                  placeholder="discount"
                  onChange={(e) => setDiscount(Number(e.target.value))}
                />
                <Input
                  htmlFor="shipping"
                  placeholder="shipping"
                  onChange={(e) => setShipping(Number(e.target.value))}
                /> */}
                {/* <Input htmlFor="variant" placeholder="variant" /> */}
                <div className="product-area" ref={productAreaRef}>
                  <Input
                    htmlFor="search"
                    placeholder="Search Product"
                    onChange={(e) => setSearch(e.target.value)}
                    // onChange={() => setIsFocus(false)}
                    autocomplete="off"
                    onFocus={() => setIsFocus(true)}
                  />
                  {isFocus && (
                    <div className="select-product">
                      <ul>
                        {products.map((product) => (
                          <li onClick={() => addOrderItem(product)}>
                            {product.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {orderItems.map((order) => (
                    <div className="row order-item">
                      <div className="col-md-6">
                        <p className="title">{order.product_name}</p>
                      </div>
                      <div className="col-md-2 price">
                        <p>{order.quantity}</p>
                      </div>
                      <div className="col-md-3">
                        <div className="qnty">
                          <FiPlus
                            className="plus"
                            onClick={() => handleIncrementOrderItem(order)}
                          />
                          <p>{order.quantity}</p>
                          <LuMinus
                            className="minus"
                            onClick={() => handleDecrementOrderItem(order)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1">
                        <RxCross2
                          className="cross"
                          onClick={() => handleRemoveOrderItem(order)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-3 custom-item">
                <div className="summery">
                  <div className="row">
                    <div className="col-md-9 left">Product Total Price</div>
                    <div className="col-md-3 right">{final_price}</div>
                    <div className="col-md-9 left">Shipping</div>
                    {/*  <div className="col-md-3 right">{shipping}</div>
                    <div className="col-md-9 left">Discount</div>
                    <div className="col-md-3 right">{discount}</div>
                    <div className="col-md-9 left">Total</div>
                    <div className="col-md-3 right">
                      {final_price + shipping - discount}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit">Update Order</Button>
          </form>
        </div>
      </Display>
    </div>
  );
};

export default UpdateOrder;
