// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "http://localhost:8000/api", 
//   // baseURL: "https://real-estate-12wq.onrender.com/api", 
//   withCredentials: true,
// });

// export default apiRequest;


import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
    ? "https://real-estate-zpov.onrender.com/api"
    : "http://localhost:8000/api",
  withCredentials: true,
});

export default apiRequest;
