import axios from 'axios';
const API_URL = 'http://localhost:5000/v1/api';

// save user to db
async function httpSaveUser(userData) {
  const res = await axios.post(`${API_URL}/users/auth/signup`, userData);
  return res.data;
}

export {
  httpSaveUser
}