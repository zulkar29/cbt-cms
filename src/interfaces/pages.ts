export interface IPages {
  id?: number;
  title: string;
  slug: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IPagesResponse {
  message: string;
  data: {
    count: number;
    rows: IPages[];
  };
}
