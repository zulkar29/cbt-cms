import axios from '../../lib';
import { ICoupon, ICouponResponse } from '../../interfaces/coupon';

const createCoupon = async (
  categoryData: Partial<ICoupon>
): Promise<Partial<ICouponResponse>> => {
  const { data } = await axios.post(`/coupons`, categoryData);
  return data;
};

const getCoupon = async (filter: {
  [key: string]: string | number;
}): Promise<ICouponResponse> => {
  let url = `/coupons`;
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
  const { data } = await axios.patch(`/coupons/${slug}`, coupondata);
  return data;
};

const deleteCoupon = async (videoId: number) => {
  const { data } = await axios.delete(`/coupons/?ids=[${videoId}]`);
  return data;
};

const categoryService = {
  createCoupon,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};

export default categoryService;
