export interface Ikeypoint {
  id?: number;
  title: string;
  subtitle: string;
  url: string;
  image: string | File | null;
  created_at?: string;
  updated_at?: string;
}

export interface IKeypointResponse {
  massage: string;
  data: { count: number; rows: Ikeypoint[] };
}
