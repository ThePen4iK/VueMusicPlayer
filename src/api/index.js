import axios from 'axios';

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});


instance.interceptors.request.use(
  config => {
    config.headers.common['X-CSRFTOKEN'] = `${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
  );

export default instance;