import axios from 'axios';
import { API_URL } from '../../constants';
import { IPages, IPagesResponse } from '../../interfaces/pages';

const createPages = async (
  pageData: IPages
): Promise<Partial<IPagesResponse>> => {
  const { data } = await axios.post(`${API_URL}/pages`, pageData);
  return data;
};

const getPages = async (): Promise<IPagesResponse> => {
  const { data } = await axios.get(`${API_URL}/pages`);
  return data;
};

const updatePages = async (pageData: Partial<IPages>) => {
  const { data } = await axios.patch(
    `${API_URL}/pages/${pageData.id}`,
    pageData
  );
  return data.data;
};

const deletePages = async (pageId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/pages/?ids=[${pageId}]`);
  return data.data;
};

const faqService = {
  createPages,
  getPages,
  updatePages,
  deletePages,
};

export default faqService;
