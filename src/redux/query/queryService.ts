import axios from '../../lib';
import { API_URL } from '../../constants';
import { IQueryResponse } from '../../interfaces/query';

// get all Queries
const getQueries = async (filter: {
  [key: string]: string | number;
}): Promise<IQueryResponse> => {
  let url = `${API_URL}/product-querys`;
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

// Delete Queries
const deleteQueries = async (id: number) => {
  const { data } = await axios.delete(`${API_URL}/product-querys/?ids=[${id}]`);
  return data.data;
};

const queryService = {
  getQueries,
  deleteQueries,
};

export default queryService;
