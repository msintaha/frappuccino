import axios from 'axios';

const instance = axios.create({ baseURL: process.env.API_BASE_URL });

// SessionExpirationInterceptor
instance.interceptors.response.use(null, (rejection) => {
  const errorMessage = rejection && rejection.response && rejection.response.statusText;
  if (errorMessage === 'Unauthorized') {
    window.location.replace(process.env.BASE_URL + '/login');
  }
  return Promise.reject(rejection.response);
});

export default instance;
