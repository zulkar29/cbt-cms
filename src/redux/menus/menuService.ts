import { IMenu } from './../../interfaces/menu';
import axios from 'axios';
import { API_URL } from '../../constants';
import { IMenuResponse } from '../../interfaces/menu';

// create Menu
const createMenu = async (productData: IMenu) => {
  const { data } = await axios.post(`${API_URL}/menus`, productData);
  return data;
};

// get all products
const getMenus = async (filter: {
  [key: string]: string | number;
}): Promise<IMenuResponse> => {
  let url = `${API_URL}/menus`;
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

// Delete
const deleteMenu = async (ids: number[]) => {
  const idsString = ids.join(',');
  const { data } = await axios.delete(`${API_URL}/menus/?ids=[${idsString}]`);
  return data;
};

const menuService = {
  createMenu,
  getMenus,
  deleteMenu,
};

export default menuService;
