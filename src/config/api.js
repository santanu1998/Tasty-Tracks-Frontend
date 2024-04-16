import axios from 'axios';

// export const API_URL = "http://localhost:8080";
export const API_URL = "http://13.50.115.145:8082";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


