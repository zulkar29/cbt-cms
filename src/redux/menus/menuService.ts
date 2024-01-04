import { IMenuResponse } from '../../interfaces/menu';
import axios from '../../lib';
import { IMenu } from './../../interfaces/menu';

// create Menu
const createMenu = async (productData: IMenu) => {
  const { data } = await axios.post(`/menus`, productData);
  return data;
};

// get all products
const getMenus = async (filter: {
  [key: string]: string | number;
}): Promise<IMenuResponse> => {
  let url = `/menus`;
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

const updateMenus = async (menuData: Partial<IMenu>, id: number | string) => {
  const { data } = await axios.patch(
    `/menus/${id}`,
    menuData
  );
  return data.data;
};

// Delete
const deleteMenu = async (ids: number[]) => {
  const idsString = ids.join(',');
  const { data } = await axios.delete(`/menus/?ids=[${idsString}]`);
  return data;
};

const menuService = {
  createMenu,
  getMenus,
  deleteMenu,
  updateMenus
};

export default menuService;
