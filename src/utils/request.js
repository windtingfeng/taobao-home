import axios from 'axios'
import cookie from './cookie';

const instance = axios.create({
    baseURL: 'https://e-commerce.kaikeba.com/shop-api/',
    timeout: 5000
  });

  instance.interceptors.request.use(
    (config) => {
      // 请求头处理
      // 请求头中携带 token 信息
      if (cookie.getCookie('token') && config.url !== 'oauth/token') {
        config.headers.Authorization = `Bearer ${cookie.getCookie('token')}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
  instance.interceptors.response.use(
    (response) => {
      const res = response;
      return res;
    },
    (error) => Promise.reject(error),
  );
  export default instance