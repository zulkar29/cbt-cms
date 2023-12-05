export interface IReview {
  id: number;
  product_name: number;
  user_name: number;
  name: string;
  rating: number;
  comment: string;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface IRevieResponse {
  data: {
    count: number;
    rows: IReview[];
  };
}
