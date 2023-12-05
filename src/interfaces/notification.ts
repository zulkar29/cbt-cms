export interface INotification {
  id?: number | string;
  title: string;
  details?: string;
  created_at?: string;
  updated_at?: string;
}

export interface INotificationResponse {
  message: string;
  data: {
    count: number;
    rows: INotification[];
  };
}
