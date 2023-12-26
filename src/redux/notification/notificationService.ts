import axios from '../../lib';

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
  const { data } = await axios.post(`/notifications`, faqData);
  return data;
};

const getNotification = async (): Promise<INotificationResponse> => {
  const { data } = await axios.get(`/notifications`);
  return data;
};

const NotificationService = {
  createNotification,
  getNotification,
};

export default NotificationService;
