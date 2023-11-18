import axios from 'axios';
import { API_URL } from '../../constants';
import { IEmi, IEmiResponse } from '../../interfaces/emi';

// get all Emis
const getEmis = async (filter: {
  [key: string]: string | number;
}): Promise<IEmiResponse> => {
  let url = `${API_URL}/emis`;
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

const createEmi = async (productData: IEmi) => {
  const { data } = await axios.post(`${API_URL}/emis`, productData);
  return data;
};

const updateEmi = async (id: number, categoryData: FormData) => {
  const { data } = await axios.patch(`${API_URL}/emis/${id}`, categoryData);
  return data.data;
};

const deleteEmi = async (videoId: number) => {
  const { data } = await axios.delete(`${API_URL}/emis/?ids=[${videoId}]`);
  return data.data;
};

const emiService = {
  getEmis,
  createEmi,
  updateEmi,
  deleteEmi,
};

export default emiService;
