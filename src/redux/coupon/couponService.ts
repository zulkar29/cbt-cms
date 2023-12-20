import axios from 'axios';
import { API_URL } from '../../constants';
import { ICoupon, ICouponResponse } from '../../interfaces/coupon';

const createCoupon = async (
  categoryData: Partial<ICoupon>
): Promise<Partial<ICouponResponse>> => {
  const { data } = await axios.post(`${API_URL}/coupons`, categoryData);
  return data;
};

const getCoupon = async (filter: {
  [key: string]: string | number;
}): Promise<ICouponResponse> => {
  let url = `${API_URL}/coupons`;
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

const updateCoupon = async (
  slug: number | string,
  coupondata: Partial<ICoupon>
) => {
  const { data } = await axios.patch(`${API_URL}/coupons/${slug}`, coupondata);
  return data;
};

const deleteCoupon = async (videoId: number) => {
  const { data } = await axios.delete(`${API_URL}/coupons/?ids=[${videoId}]`);
  return data;
};

const categoryService = {
  createCoupon,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};

export default categoryService;
