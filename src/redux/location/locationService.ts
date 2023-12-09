import { ILcation, ILocationResponse } from './../../interfaces/location';
import axios from 'axios';
import { API_URL } from '../../constants';

// get all Emis
const getLocations = async (filter: {
  [key: string]: string | number;
}): Promise<ILocationResponse> => {
  let url = `${API_URL}/location`;
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

const createLocation = async (productData: ILcation) => {
  const { data } = await axios.post(`${API_URL}/location`, productData);
  return data;
};

const updateLocation = async (id: number | string, categoryData: ILcation) => {
  const { data } = await axios.patch(`${API_URL}/location/${id}`, categoryData);
  return data.data;
};

const deleteLocation = async (videoId: number) => {
  const { data } = await axios.delete(`${API_URL}/location/?ids=[${videoId}]`);
  return data;
};

const locationService = {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
};

export default locationService;
