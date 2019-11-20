import axios from 'axios';

const baseURL = "/api";

let instance = axios.create({
  baseURL: baseURL,
  timeout: 30000, // 30 secs
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
