export interface IAdBanner {
  id?: number;
  url: string;
  group_by: string;
  image: File | null;
  is_visible: boolean;
}

export interface IAddBannerResponse {
  message: string;
  data: {
    count: number;
    rows: IAdBanner[];
  };
}
