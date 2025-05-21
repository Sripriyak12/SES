// src/api.js

import axios from 'axios';

// Create an Axios instance with base URL set to your backend
const api = axios.create({
  baseURL: 'http://192.168.128.146:8080',  // backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add other config options here, like timeout if needed
});


export default api;
