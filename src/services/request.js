import axios from 'axios';
const API_URL = 'http://localhost:5000/v1/api';

// user signup
export async function httpSignupUser(userData) {
  const res = await axios.post(`${API_URL}/users/auth/signup`, userData);
  return res.data;
}
// user login
export async function httpLoginUser(userData) {
  const res = await axios.post(`${API_URL}/users/auth/login`, userData);
  console.log(res.data);
  return res.data;
}

// user logout
export async function httpLogOutUser() {
  const res = await axios.get(`${API_URL}/users/auth/logout`);
  console.log(res.data);
}