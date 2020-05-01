import http from '../utils/http';

export default class UserService {
  static list() {
    return http.get('/flavors').then(response => response.data);
  }

  static create(payload) {
    return http.post('/flavors', payload).then(response => response.data);
  }
}
