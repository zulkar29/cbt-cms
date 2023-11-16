import axios from 'axios';
import { API_URL } from '../../constants';
import { IToken, IUser } from '../../interfaces/user';

// Login user
const login = async (userData: IUser): Promise<IToken> => {
  const response = await axios.post(API_URL + '/auths/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  logout,
  login,
};

export default authService;
