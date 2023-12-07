import axios from 'axios';
import { API_URL } from '../../constants';
import {
  INotification,
  INotificationResponse,
} from '../../interfaces/notification';

export interface ICreateResponse {
  message: string;
  data: INotification[];
}

const createNotification = async (
  faqData: INotification
): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`${API_URL}/notifications`, faqData);
  return data;
};

const getNotification = async (): Promise<INotificationResponse> => {
  const { data } = await axios.get(`${API_URL}/notifications`);
  return data;
};

const NotificationService = {
  createNotification,
  getNotification,
};

export default NotificationService;
