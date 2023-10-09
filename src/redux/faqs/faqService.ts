import axios from 'axios';
import { API_URL } from '../../constants';
import { IFaq, IFaqResponse } from '../../interfaces/faq';

export interface ICreateResponse {
  message: string;
  data: IFaq[];
}

const createFaq = async (faqData: IFaq): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`${API_URL}/faqs`, faqData);
  return data;
};

const getFaqs = async (): Promise<IFaqResponse> => {
  const { data } = await axios.get(`${API_URL}/faqs`);
  return data;
};

const updateFaq = async (faqData: Partial<IFaq>) => {
  const { data } = await axios.patch(`${API_URL}/faqs/${faqData.id}`, faqData);
  return data.data;
};

const deleteFaq = async (faqId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/faqs/?ids=[${faqId}]`);
  return data.data;
};

const faqService = {
  createFaq,
  getFaqs,
  updateFaq,
  deleteFaq,
};

export default faqService;
