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
  return res.data;
}

// user logout
export async function httpLogOutUser() {
  await axios.get(`${API_URL}/users/auth/logout`);
}

// biodata registration
export async function httpSaveBiodata(candidatesInfo) {
	const res = await axios.post(`${API_URL}/registration`, candidatesInfo);
	return res.data;
}

// get single biodata
export async function httpGetSingleBiodata(biodataId) {
	const res = await axios.get(`${API_URL}/biodatas/biodata`, {
		params: {
			biodataId: biodataId,
		},
	});
	return res.data;
}

// delete a biodata
export async function httpDeleteBiodata(biodataId) {
	return await axios.delete(`${API_URL}/biodatas/biodata/delete`, {
		params: {
			biodataId: biodataId,
		},
	});
}

// get count of biodatas
export async function httpGETBiodataCount() {
	const res = await axios.get(`${API_URL}/biodatas/count`);
	return res.data;
}

// reset password
export async function httpGETResetPassword(email) {
	const res = await axios.post(`${API_URL}/password/forget-password`, {email});
	return res.data;
}