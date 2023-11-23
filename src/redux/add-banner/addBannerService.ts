import axios from 'axios';
import { API_URL } from '../../constants';
import { IAdBanner, IAddBannerResponse } from '../../interfaces/addBanner';

export interface ICreateResponse {
  message: string;
  data: IAdBanner[];
}

const createAddBanner = async (
  bannerData: FormData
): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`${API_URL}/banners`, bannerData);
  return data;
};

const getAddBanner = async (filter: {
  [key: string]: string | number;
}): Promise<IAddBannerResponse> => {
  let url = `${API_URL}/banners`;
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

const updateAddBanner = async (bannerData: Partial<IAdBanner>) => {
  const { data } = await axios.patch(
    `${API_URL}/banners/${bannerData.id}`,
    bannerData
  );
  return data.data;
};

const deleteBanner = async (faqId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/banners/?ids=[${faqId}]`);
  return data.data;
};

const addBannerService = {
  createAddBanner,
  getAddBanner,
  updateAddBanner,
  deleteBanner,
};

export default addBannerService;
