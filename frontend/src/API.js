import axios from 'axios';

const API = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_API}`,
		timeout: 5000,
		headers: {
			Authorization: localStorage.getItem('access_token'),
			'Content-Type': 'application/json',
			accept: 'application/json'
		}

});

export default API;
