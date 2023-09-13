import axios from 'axios';

// get all products
export const getAllProducts = async (page: number, limit: number) => {
  const { data } = await axios.get(
    `${`https://jsonplaceholder.typicode.com`}/comments/?_page=${page}&_limit=${limit}`
  );

  return data;
};
