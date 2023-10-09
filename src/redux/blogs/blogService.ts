import axios from 'axios';
import { API_URL } from '../../constants';
import { BlogData, ResponseBlogData } from '../../interfaces/blog';

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

const getBlogs = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<ResponseBlogData> => {
  const { data } = await axios.get(
    `${API_URL}/blogs?page=${page}&limit=${limit}`
  );
  return data;
};

const updateBlog = async (blogData: Partial<BlogData>) => {
  const { data } = await axios.patch(
    `${API_URL}/blogs/${blogData.id}`,
    blogData
  );
  return data.data;
};

const deleteBlog = async (blogId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/blogs/?ids=[${blogId}]`);
  return data.data;
};

const blogService = {
  createNewBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};

export default blogService;
