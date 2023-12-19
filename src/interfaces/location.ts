export interface ILcation {
  id?: number;
  location: string;
  price: string;
  created_at?: string;
  updated_at?: string;
}

export interface ILocationResponse {
  massage: string;
  data: { count: number; rows: ILcation[] };
}
