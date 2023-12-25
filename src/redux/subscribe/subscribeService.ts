import axios from 'axios';
import { API_URL } from '../../constants';
import { ISubscribe, ISubscribeResponse } from '../../interfaces/subscribe';

const createSubscribe = async (
  subscribeData: ISubscribe
): Promise<Partial<ISubscribe>> => {
  const { data } = await axios.post(`${API_URL}/subscribes`, subscribeData);
  return data;
};

const getSubscribes = async (filter: {
  [key: string]: string | number;
}): Promise<ISubscribeResponse> => {
  let url = `${API_URL}/subscribes`;
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
