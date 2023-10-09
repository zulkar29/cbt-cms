export interface IFaq {
  id?: number | string;
  question: string;
  answer?: string;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface IFaqResponse {
  message: string;
  data: {
    count: number;
    rows: IFaq[];
  };
}
