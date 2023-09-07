import axios from 'axios';
import { API_URL } from '../constants';

export interface ICreateResponse {
  message: string;
  data: {
    id: number;
    title: string;
    slug: string;
    description: string;
    is_visible: boolean;
    meta_title: string;
    meta_description: string;
    image: string;
    updated_at: string;
    created_at: string;
  };
}

const createNewBlog = async (blogData: FormData): Promise<ICreateResponse> => {
  const { data } = await axios.post(`${API_URL}/blogs`, blogData);
  return data;
};

const blogService = {
  createNewBlog,
};

export default blogService;
