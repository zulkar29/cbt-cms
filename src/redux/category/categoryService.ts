import axios from 'axios';
import { API_URL } from '../../constants';
import { ICategory, ICategoryResponse } from '../../interfaces/category';

const createCategory = async (
  categoryData: FormData
): Promise<Partial<ICategoryResponse>> => {
  const { data } = await axios.post(`${API_URL}/categories`, categoryData);
  return data;
};

const getCategory = async (filter: {
  [key: string]: string | number;
}): Promise<ICategoryResponse> => {
  let url = `${API_URL}/categories`;
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

const updateCategory = async (
  slug: number | string,
  categoryData: Partial<ICategory> | FormData
) => {
  const { data } = await axios.patch(
    `${API_URL}/categories/${slug}`,
    categoryData
  );
  return data.data;
};

const deleteCategory = async (videoId: number) => {
  const { data } = await axios.delete(
    `${API_URL}/categories/?ids=[${videoId}]`
  );
  return data.data;
};

const categoryService = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
