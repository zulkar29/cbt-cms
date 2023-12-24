export type IRefund = {
  id: number;
  customer_id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  product_price: number | null;
  refund_status: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export interface IRefundResponse {
  massage: string;
  data: { count: number; rows: IRefund[] };
}
