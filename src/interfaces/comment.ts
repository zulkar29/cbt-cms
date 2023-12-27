export type IComment = {
  id?: number;
  name: string;
  email: string;
  comment: string;
  updated_at?: string;
  created_at?: string;
};

export interface ICommentResponse {
  data: {
    count: number;
    rows: IComment[];
  };
}
