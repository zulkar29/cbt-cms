import axios from 'axios';
import { API_URL } from '../../constants';
import { IAdBanner, IAddBannerResponse } from '../../interfaces/addBanner';

export interface ICreateResponse {
  message: string;
  data: IAdBanner[];
}

const createAddBanner = async (
  bannerData: IAdBanner
): Promise<Partial<ICreateResponse>> => {
  const { data } = await axios.post(`${API_URL}/banners`, bannerData);
  return data;
};

const getAddBanner = async (): Promise<IAddBannerResponse> => {
  const { data } = await axios.get(`${API_URL}/banners`);
  return data;
};

const updateAddBanner = async (bannerData: Partial<IAdBanner>) => {
  const { data } = await axios.patch(
    `${API_URL}/banners/${bannerData.id}`,
    bannerData
  );
  return data.data;
};

const deleteFaq = async (faqId: number | string) => {
  const { data } = await axios.delete(`${API_URL}/banners/?ids=[${faqId}]`);
  return data.data;
};

const addBannerService = {
  createAddBanner,
  getAddBanner,
  updateAddBanner,
  deleteFaq,
};

export default addBannerService;
