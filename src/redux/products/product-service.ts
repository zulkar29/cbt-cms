import axios from 'axios';
import { API_URL } from '../constants';

// get all products
export const getAllProducts = async (page: number, limit: number) => {
  const { data } = await axios.get(
    `${API_URL}/comments/?_page=${page}&_limit=${limit}`
  );

  return data;
};
