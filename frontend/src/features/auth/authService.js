import axios from "axios";
const API_URL = "http://localhost:5000/api/users";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Loguout user
const logout = () => localStorage.removeItem("user");

//  Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
