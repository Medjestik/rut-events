import type { IEvent, ICreateEventsRequest, IMessageResponse } from './types';

import * as api from '../../shared/api/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEvents = createAsyncThunk<IEvent[]>(
	'events/getEvents',
	async () => {
		const response = await api.getEvents();
		return response;
	}
);

export const createEventRequest = createAsyncThunk<
	IMessageResponse,
	ICreateEventsRequest
>('events/createRequest', api.createRequest);
