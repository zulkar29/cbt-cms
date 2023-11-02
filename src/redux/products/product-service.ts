import axios from 'axios';
import { API_URL } from '../../constants';
import { IProductResponse } from '../../interfaces/product';

// get all products
const getAllProducts = async (): Promise<IProductResponse> => {
  const { data } = await axios.get(`${API_URL}/products`);

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
