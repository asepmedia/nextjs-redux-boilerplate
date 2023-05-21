import axios from 'axios';
import { get } from 'lodash';

// Request interceptor for API calls
const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.request.use(
  async (config) => config,
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      try {
        return axios(error.response.config);
      } catch (e) {
        /* Refresh token failed then do the logout, direct to login page */
        if (get(e, 'response.status') && e.response.status === 403) {
        }
      }
    }
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
