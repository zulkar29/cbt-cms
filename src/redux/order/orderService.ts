import { IOrderResponse } from './../../interfaces/order';
import axios from 'axios';
import { API_URL } from '../../constants';

// get all products
const getAllOrders = async (filter: {
  [key: string]: string | number | boolean;
}): Promise<IOrderResponse> => {
  let url = `${API_URL}/orders`;

  // Filter out keys with false values
  const filteredFilter: { [key: string]: string | number | boolean } = {};
  Object.entries(filter).forEach(([key, value]) => {
    if (value !== false) {
      filteredFilter[key] = value;
    }
  });

  if (Object.keys(filteredFilter).length > 0) {
    const queryString = Object.entries(filteredFilter)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
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
  return data;
};

const productService = {
  getAllOrders,
  deleteOrder,
  updateOrder,
};

export default productService;
