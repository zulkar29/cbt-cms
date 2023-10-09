import axios from 'axios';
import { API_URL } from '../../constants';
import { IFaq, IFaqResponse } from '../../interfaces/faq';

export interface ICreateResponse {
  message: string;
  data: IFaq[];
}

const createFaq = async (faqData: IFaq): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`${API_URL}/videos`, faqData);
  return data;
};

const getFaqs = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<IFaqResponse> => {
  const { data } = await axios.get(
    `${API_URL}/videos?page=${page}&limit=${limit}`
  );
  return data;
};

const updateFaq = async (faqData: Partial<IFaq>) => {
  const { data } = await axios.patch(
    `${API_URL}/videos/${faqData.id}`,
    faqData
  );
  return data.data;
};

const deleteFaq = async (faqId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/videos/?ids=[${faqId}]`);
  return data.data;
};

const faqService = {
  createFaq,
  getFaqs,
  updateFaq,
  deleteFaq,
};

export default faqService;
