import axios from 'axios';
const API_URL = 'http://localhost:5000/v1/api';

// save user to db
export async function httpSignupUser(userData) {
  const res = await axios.post(`${API_URL}/users/auth/signup`, userData);
  return res.data;
}
export async function httpLoginUser(userData) {
  const res = await axios.post(`${API_URL}/users/auth/login`, userData);
  console.log(res.data);
  return res.data;
}