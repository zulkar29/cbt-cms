export interface IVideo {
  id: number | string;
  url: string;
  is_visible: boolean;
}

export interface IVideoResponse {
  data: {
    count: number;
    rows: IVideo[];
  };
}
