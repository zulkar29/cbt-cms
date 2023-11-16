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

const createProduct = async (productData: FormData) => {
  const { data } = await axios.post(`${API_URL}/products`, productData);
  return data;
};

const updateProduct = async (id: number, categoryData: FormData) => {
  const { data } = await axios.patch(`${API_URL}/products/${id}`, categoryData);
  return data.data;
};

const deleteProduct = async (videoId: number) => {
  const { data } = await axios.delete(`${API_URL}/products/?ids=[${videoId}]`);
  return data.data;
};

const csvProduct = async () => {
  const { data } = await axios.get(`${API_URL}/products/csv`);
  return data;
};

const uploadCsvProduct = async (csvData: FormData) => {
  const { data } = await axios.post(`${API_URL}/products/csv`, csvData);
  return data;
};

const productService = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  csvProduct,
  uploadCsvProduct,
};

export default productService;
