import axios from 'axios';
import { API_URL } from '../../constants';
import { IProductResponse } from '../../interfaces/product';

// get all products
const getAllProducts = async (filter: {
  [key: string]: string | number;
}): Promise<IProductResponse> => {
  let url = `${API_URL}/products`;
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

const createCategory = async (productData: FormData) => {
  const { data } = await axios.post(`${API_URL}/products`, productData);
  return data;
};

const productService = {
  getAllProducts,
  createCategory,
};

export default productService;
