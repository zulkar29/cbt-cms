export interface IUser {
  user_name: string;
  password: string;
}
type User = {
  address: string;
  city: string;
  created_at: string;
  email: string;
  id: number;
  image: null | string; // Assuming image can be null or a string
  mobile: string;
  name: string;
  password: string;
  role_id: number;
  updated_at: string;
};
export interface IToken {
  accessToken: string;
  refreshToken: string;
  user: User;
}
