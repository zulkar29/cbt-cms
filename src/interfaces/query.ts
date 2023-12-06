export type IQuery = {
  id: number;
  product_id: number;
  product_name: string;
  mobile: string;
  question: string;
  created_at: string; // Assuming it's a string representation of a date
  updated_at: string; // Assuming it's a string representation of a date
};

export interface IQueryResponse {
  massage: string;
  data: { count: number; rows: IQuery[] };
}
