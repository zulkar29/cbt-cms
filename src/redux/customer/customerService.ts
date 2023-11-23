import axios from 'axios';
import { API_URL } from '../../constants';
import { ICustomerResponse } from '../../interfaces/customer';
import jwtInterceptor from '../../components/interceptor';

// get all products
const getAllCustomer = async (filter: {
  [key: string]: string | number;
}): Promise<ICustomerResponse> => {
  let url = `${API_URL}/users`;
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
  const { data } = await jwtInterceptor.get(url);

  return data;
};

// Update Order
const updateCustomer = async (
  id: number,
  orderData: { [key: string]: string }
) => {
  const { data } = await axios.patch(`${API_URL}/users/${id}`, orderData);
  return data;
};

const deleteCustomer = async (ids: [number]) => {
  const { data } = await axios.delete(`${API_URL}/users/?ids=[${ids}]`);
  return data;
};

const customerService = {
  getAllCustomer,
  deleteCustomer,
  updateCustomer,
};

export default customerService;
