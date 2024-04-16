import axios from 'axios';

// export const API_URL = "http://localhost:8080";
export const API_URL = "http://51.21.41.40:8081";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


