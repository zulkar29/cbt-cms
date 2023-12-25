import axios from 'axios';
import { API_URL } from '../../constants';
import { ISupport, ISupportResponse } from '../../interfaces/support';

const getSupports = async (): Promise<ISupportResponse> => {
  const { data } = await axios.get(`${API_URL}/supports`);
  return data;
};

const updateSupport = async (supportData: Partial<ISupport>) => {
  const { data } = await axios.patch(
    `${API_URL}/supports/${supportData.id}`,
    supportData
  );
  return data;
};

const deleteSupport = async (supportId: number | string) => {
  const { data } = await axios.delete(
    `${API_URL}/supports/?ids=[${supportId}]`
  );
  return data;
};

const supportService = {
  getSupports,
  updateSupport,
  deleteSupport,
};

export default supportService;
