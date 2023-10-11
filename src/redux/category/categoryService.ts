import axios from 'axios';
import { API_URL } from '../../constants';
import { ICategory, ICategoryResponse } from '../../interfaces/category';

const createCategory = async (
  categoryData: ICategory
): Promise<Partial<ICategoryResponse>> => {
  const { data } = await axios.post(`${API_URL}/categories`, categoryData);
  return data;
};

const getCategory = async (): Promise<ICategoryResponse> => {
  const { data } = await axios.get(`${API_URL}/categories`);
  return data;
};

const updateCategory = async (categoryData: Partial<ICategory>) => {
  const { data } = await axios.patch(
    `${API_URL}/categories/${categoryData.id}`,
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
