import axios from 'axios';
import config from '../config';

export default class APIService {
  static list() {
    return axios.get(`${config.API_ENDPOINT}`).then(response => response.data);
  }

  static create(payload) {
    return axios.post(`${config.API_ENDPOINT}`, payload).then(response => response.data);
  }

  static update(id, payload) {
    return axios.put(`${config.API_ENDPOINT}/${id}`, payload).then(response => response.data);
  }
}
