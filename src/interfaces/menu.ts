export interface IMenu {
  id?: number;
  name: string;
  slug: string;
  position: string;
  created_at?: string;
  updated_at?: string;
}

export interface IMenuResponse {
  massage: string;
  data: { count: number; rows: IMenu[] };
}
