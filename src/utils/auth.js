export const BASE_URL = 'https://auth.nomoreparties.co';

function checkErrors(res) {
	if (!res.ok) {
		return Promise.reject(`Ошибка: ${res.status}`);
	}
	return res.json();
}
export const registration = ({ email, password }) => {
	return fetch(`${BASE_URL}/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ password, email }),
	})
	.then(checkErrors);
}


export const authorization = ({ email, password }) => {
	return fetch(`${BASE_URL}/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ password, email }),
	})
	.then(checkErrors);
}

export const getToken = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
	})
	.then(checkErrors);
}