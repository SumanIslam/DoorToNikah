import axios from 'axios';
const API_URL = 'http://localhost:5000/v1/api';

/* USER RELATED */
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

// google user login
export async function httpGETGoogleLoginUser() {
	const res = await axios.get(`${API_URL}/login/success/again`);
	console.log('hi',res);
	return res.data;
}

// user logout
export async function httpLogOutUser() {
  await axios.get(`${API_URL}/users/auth/logout`);
}

/* BIODATA RELATED */
// biodata registration
export async function httpSaveBiodata(candidatesInfo) {
	const res = await axios.post(`${API_URL}/registration`, candidatesInfo);
	return res.data;
}

// get biodatas
export async function httpGETBiodatas(BiodataDetails) {
	const res = await axios.get(`${API_URL}/biodatas`, {
		params: {
			BiodataDetails: BiodataDetails,
		},
	});
	// console.log(res.data);
	return res.data;
}
// get approved biodatas
export async function httpGETApprovedBiodatas(BiodataDetails) {
	const res = await axios.get(`${API_URL}/approved-biodatas`, {
		params: {
			BiodataDetails: BiodataDetails,
		},
	});
	// console.log(res.data);
	return res.data;
}

// get biodatas with pagination
export async function httpGETBiodatasWithPagination(BiodataDetails, page) {
	const res = await axios.get(`${API_URL}/biodatasWithPagination`, {
		params: {
			BiodataDetails: BiodataDetails,
			page: page,
			limit: 12,
		},
	});
	// console.log(res.data);
	return res.data;
}

// get approved biodatas with pagination
export async function httpGETApprovedBiodatasWithPagination(BiodataDetails, page) {
	const res = await axios.get(`${API_URL}/approved-biodatasWithPagination`, {
		params: {
			BiodataDetails: BiodataDetails,
			page: page,
			limit: 12,
		},
	});
	// console.log(res.data);
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

/* PASSWORD RELATED */
// reset password
export async function httpPOSTResetPassword(email) {
	const res = await axios.post(`${API_URL}/password/forget-password`, {email});
	return res.data;
}
// change password
export async function httpPOSTChangePassword(userData) {
	const res = await axios.post(`${API_URL}/password/change-password`, userData);
	// console.log(res.data);
	return res.data;
}

/* CONTACT REQUEST RELATED */
// post contactRequest
export async function httpPOSTSaveContactRequest(contactRequestDetails) {
	const res = await axios.post(
		`${API_URL}/contact-request`,
		contactRequestDetails
	);
	// console.log(res.data);
	return res.data;
}

/* ADMIN PANEL RELATED */
// get total users count
export async function httpGETUsersCount() {
	const res = await axios.get(`${API_URL}/users/userCount`);

	// console.log(res.data);
	return res.data;
}

// get all unapproved biodatas
export async function httpGETUnapprovedBiodatas() {
	const res = await axios.get(`${API_URL}/biodatas/unapproved-biodatas`);

	// console.log(res.data);
	return res.data;
}

// get all unapproved biodatas
export async function httpGETUnapprovedBiodatasWithPagination(page) {
	const res = await axios.get(
		`${API_URL}/biodatas/unapproved-biodatas-pagination`,
		{
			params: {
				page: page,
			},
		}
	);

	// console.log(res.data);
	return res.data;
}

export async function httpPOSTAcceptedBiodata(biodata) {
	const res = await axios.post(
		`${API_URL}/biodatas/accepted`, biodata
	);

	// console.log(res.data);
	return res.data;
}

// get contact request
export async function httpGETContactRequest() {
	const res = await axios.get(
		`${API_URL}/contact-request`,
	);
	console.log(res.data);
	return res.data;
}