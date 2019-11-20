import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api";

let instance = axios.create({
  baseURL: baseURL,
  timeout: 30000, // 30 secs
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
