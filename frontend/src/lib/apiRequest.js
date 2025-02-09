import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8000/api", 
  baseURL: "https://real-estate-12wq.onrender.com", 
  withCredentials: true,
});

export default apiRequest;
