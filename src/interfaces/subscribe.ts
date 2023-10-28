export interface ISubscribe {
  id?: number;
  email: string;
  created_at?: string;
  updated_at?: string;
}

export interface ISubscribeResponse {
  message: string;
  data: {
    count: number;
    rows: ISubscribe[];
  };
}
