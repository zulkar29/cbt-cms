export interface ICustomer {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  address: string | null;
  city: string | null;
  image: string | null;
  role_id: number;
  password?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ICustomerResponse {
  massage: string;
  data: { count: number; rows: ICustomer[] };
}
