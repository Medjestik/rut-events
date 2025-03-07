import type { ICreateEventsRequest } from '../../store/events/types';

const API_URL = 'https://project-api.emiit.ru/api';

const checkResponse = (res: Response) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const request = (endpoint: string, options: RequestInit) => {
	return fetch(`${API_URL}${endpoint}`, options).then(checkResponse);
};

export const getEvents = () => {
	return request('/events', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};

export const createRequest = (data: ICreateEventsRequest) => {
	return request('/requests/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			full_name: data.name,
			school: data.school,
			class_number: data.classNumber,
			phone_number: data.phone,
			events: data.events,
		}),
	});
};
