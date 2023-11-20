import { IOrderResponse } from './../../interfaces/order';
import axios from 'axios';
import { API_URL } from '../../constants';

// get all products
const getAllOrders = async (filter: {
  [key: string]: string | number;
}): Promise<IOrderResponse> => {
  let url = `${API_URL}/orders`;
  if (filter && Object.keys(filter).length > 0) {
    const queryString = Object.entries(filter)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    // Add query string to the URL
    url += `?${queryString}`;
  }
  const { data } = await axios.get(url);

  return data;
};

// Update Order
const updateOrder = async (
  id: number,
  orderData: { [key: string]: string }
) => {
  const { data } = await axios.patch(`${API_URL}/orders/${id}`, orderData);
  console.log(data);
  return data;
};

const deleteOrder = async (ids: number[]) => {
  const idsString = ids.join(',');
  const { data } = await axios.delete(`${API_URL}/orders/?ids=[${idsString}]`);
  return data.data;
};

const productService = {
  getAllOrders,
  deleteOrder,
  updateOrder,
};

export default productService;
