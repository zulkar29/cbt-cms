export interface IEmi {
  id?: number;
  bank_name: string;
  three_months?: number;
  six_months?: number;
  nine_months?: number;
  twelve_months?: number;
  eighteen_months?: number;
  twenty_four_months?: number;
  thirty_months?: number;
  thirty_six_months?: number;
  created_at?: string;
  updated_at?: string;
}

export interface IEmiResponse {
  massage: string;
  data: { count: number; rows: IEmi[] };
}
