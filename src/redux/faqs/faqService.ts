import { IFaq, IFaqResponse } from '../../interfaces/faq';
import axios from '../../lib';

export interface ICreateResponse {
  message: string;
  data: IFaq[];
}

const createFaq = async (faqData: IFaq): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`/faqs`, faqData);
  return data;
};

const getFaqs = async (): Promise<IFaqResponse> => {
  const { data } = await axios.get(`/faqs`);
  return data;
};

const updateFaq = async (faqData: Partial<IFaq>) => {
  const { data } = await axios.patch(`/faqs/${faqData.id}`, faqData);
  return data;
};

const deleteFaq = async (faqId: number | string) => {
  const { data } = await axios.delete(`/faqs/?ids=[${faqId}]`);
  return data.data;
};

const faqService = {
  createFaq,
  getFaqs,
  updateFaq,
  deleteFaq,
};

export default faqService;
