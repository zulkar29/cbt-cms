import axios from 'axios';
import { API_URL } from '../../constants';
import { IRefund, IRefundResponse } from '../../interfaces/refund';

export interface ICreateResponse {
  message: string;
  data: IRefund[];
}

const getRefund = async (filter: {
  [key: string]: string | number;
}): Promise<IRefundResponse> => {
  let url = `${API_URL}/refunds`;
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

const updateRefund = async (refundData: Partial<IRefund>) => {
  const { data } = await axios.patch(
    `${API_URL}/refunds/${refundData.id}`,
    refundData
  );
  return data.data;
};

const deleteRefund = async (faqId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/refunds/?ids=[${faqId}]`);
  return data.data;
};

const refundService = {
  getRefund,
  updateRefund,
  deleteRefund,
};

export default refundService;
