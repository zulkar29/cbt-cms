import { IRevieResponse, IReview } from './../../interfaces/review';
import axios from 'axios';
import { API_URL } from '../../constants';

const getReview = async (): Promise<IRevieResponse> => {
  const { data } = await axios.get(`${API_URL}/reviews`);
  return data;
};

const updateReview = async (faqData: Partial<IReview>) => {
  const { data } = await axios.patch(
    `${API_URL}/reviews/${faqData.id}`,
    faqData
  );
  return data;
};

const faqService = {
  getReview,
  updateReview,
};

export default faqService;
