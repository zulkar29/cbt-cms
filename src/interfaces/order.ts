import { IProduct } from './product';

export interface IOrder {
  id: number;
  user_id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  thana: string;
  payment_method: string;
  delivery_method: string;
  delivery_fee: number;
  coupon_code: null | string;
  discount: number;
  order_items: IProduct[];
  final_price: number;
  order_status: string;
  created_at: string;
  updated_at: string;
}

export interface IOrderResponse {
  massage: string;
  data: { count: number; rows: IOrder[] };
}
