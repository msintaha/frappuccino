import http from '../utils/http';
import config from '../config';

export default class UserService {
  static list() {
    return http.get(`${config.API_ENDPOINT}/users`).then(response => response.data);
  }

  static create(payload) {
    return http.post(`${config.API_ENDPOINT}/users`, payload).then(response => response.data);
  }

  static update(id, payload) {
    return http.put(`${config.API_ENDPOINT}/users/${id}`, payload).then(response => response.data);
  }
}
