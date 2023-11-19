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

const deleteOrder = async (videoId: number) => {
  const { data } = await axios.delete(`${API_URL}/orders/?ids=[${videoId}]`);
  return data.data;
};

const productService = {
  getAllOrders,
  deleteOrder,
};

export default productService;
