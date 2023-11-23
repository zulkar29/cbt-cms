import axios from 'axios';

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
  const tokensDataString = localStorage.getItem('user');
  if (tokensDataString) {
    const tokensData = JSON.parse(tokensDataString);
    config.headers.common['Authorization'] = `bearer ${tokensData.accessToken}`;
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
        /*  const payload = {
          accessToken: authData.accessToken,
          refreshToken: authData.refreshToken,
        };

        const apiResponse = await axios.post(
          'http://localhost:4000/auth/refreshtoken',
          payload
        ); */
        // localStorage.setItem('tokens', JSON.stringify(apiResponse.data));
        error.config.headers[
          'Authorization'
        ] = `bearer ${authData.data.refreshToken}`;
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
