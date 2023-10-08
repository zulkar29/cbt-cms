export interface IVideo {
  id?: number | string;
  url: string;
  title?: string;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface IVideoResponse {
  message: string;
  data: {
    count: number;
    rows: IVideo[];
  };
}
