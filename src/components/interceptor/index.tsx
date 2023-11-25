import axios from 'axios';
import { API_URL } from '../../constants';

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
  const tokensDataString = localStorage.getItem('user');
  if (tokensDataString) {
    const tokensData = JSON.parse(tokensDataString);
    config.headers.common['Authorization'] = `Bearer ${tokensData.accessToken}`;
  }
  return config;
});

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authDataString = localStorage.getItem('user');
      if (authDataString) {
        const authData = JSON.parse(authDataString);
        console.log(authData);
        const payload = {
          accessToken: authData.accessToken,
          refreshToken: authData.refreshToken,
        };

        const apiResponse = await axios.post(`${API_URL}/auths/login`, payload);
        localStorage.setItem('tokens', JSON.stringify(apiResponse.data));
        error.config.headers[
          'Authorization'
        ] = `Bearer ${authData.refreshToken}`;
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
