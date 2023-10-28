import axios from 'axios';
import { API_URL } from '../../constants';
import { ISubscribe, ISubscribeResponse } from '../../interfaces/subscribe';

const createSubscribe = async (
  faqData: ISubscribe
): Promise<Partial<ISubscribe>> => {
  const { data } = await axios.post(`${API_URL}/subscribes`, faqData);
  return data;
};

const getSubscribes = async (): Promise<ISubscribeResponse> => {
  const { data } = await axios.get(`${API_URL}/subscribes`);
  return data;
};

const deleteSubscribe = async (subscribeId: number) => {
  const { data } = await axios.delete(
    `${API_URL}/subscribes/?ids=[${subscribeId}]`
  );
  return data.data;
};

const subscribeService = {
  createSubscribe,
  getSubscribes,
  deleteSubscribe,
};

export default subscribeService;
