import axios from 'axios';
import { API_URL } from '../constants';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  //   withCredentials: true,
});
/* if (process.env.NODE_ENV === 'development') {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  api.defaults.httpsAgent = httpsAgent;
  console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
} */

export default api;
