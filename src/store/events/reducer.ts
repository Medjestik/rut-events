import type { IEventsStore, IEvent } from './types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import * as actions from './actions';

import { convertDate } from '../../shared/lib/convertDate';

export const initialState: IEventsStore = {
	events: [],
	filteredEvents: [],
	searchedEvents: [],
	selectedEvents: [],
	currentDirection: null,
	possibleDirections: [],
	currentDate: null,
	possibleDates: [],
	isOpenRequestModal: false,
	isOpenSuccessModal: false,
	isOpenEventsListModal: false,
	loading: true,
	error: null,
	isLoadingRequest: false,
};

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setIsOpenRequestModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenRequestModal = action.payload;
		},
		setIsOpenSuccessModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenSuccessModal = action.payload;
		},
		setIsOpenEventsListModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenEventsListModal = action.payload;
		},
		setSearchedEvents: (state, action: PayloadAction<IEvent[] | []>) => {
			state.searchedEvents = action.payload;
			eventsSlice.caseReducers.updateFilteredEvents(state);
		},
		setCurrentDirection: (state, action: PayloadAction<string>) => {
			state.currentDirection = action.payload;
			eventsSlice.caseReducers.updateFilteredEvents(state);
		},
		setCurrentDate: (state, action: PayloadAction<string>) => {
			state.currentDate = action.payload;
			eventsSlice.caseReducers.updateFilteredEvents(state);
		},
		setSelectedEvents: (state, action: PayloadAction<IEvent>) => {
			const event = action.payload;
			const isSelected = state.selectedEvents.some((e) => e.id === event.id);

			if (isSelected) {
				state.selectedEvents = state.selectedEvents.filter(
					(e) => e.id !== event.id
				);
			} else {
				state.selectedEvents.push(event);
			}
		},
		updateFilteredEvents: (state) => {
			state.filteredEvents = state.events.filter((event) => {
				const matchesDirection =
					!state.currentDirection ||
					event.direction
						.split(',')
						.map((dir) => dir.trim())
						.includes(state.currentDirection);

				const matchesSearch =
					state.searchedEvents.length === 0 ||
					state.searchedEvents.some(
						(searchedEvent) => searchedEvent.id === event.id
					);

				const matchesDate =
					!state.currentDate || convertDate(event.date) === state.currentDate;

				return matchesDirection && matchesSearch && matchesDate;
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				actions.getEvents.fulfilled,
				(state, action: PayloadAction<IEvent[]>) => {
					state.events = action.payload;
					state.filteredEvents = action.payload;
					state.selectedEvents = [];
					state.possibleDirections = Array.from(
						new Set(
							action.payload.flatMap((event) =>
								event.direction.split(',').map((dir) => dir.trim())
							)
						)
					);
					state.possibleDates = Array.from(
						new Set(action.payload.flatMap((event) => convertDate(event.date)))
					);
					state.currentDirection = '';
					state.loading = false;
				}
			)
			.addCase(actions.getEvents.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(actions.getEvents.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error?.message || 'Произошла ошибка';
			})
			.addCase(actions.createEventRequest.fulfilled, (state) => {
				state.isLoadingRequest = false;
				state.isOpenRequestModal = false;
				state.isOpenSuccessModal = true;
			})
			.addCase(actions.createEventRequest.pending, (state) => {
				state.isLoadingRequest = true;
			})
			.addCase(actions.createEventRequest.rejected, (state) => {
				state.isLoadingRequest = false;
			});
	},
});

export const {
	setIsOpenRequestModal,
	setIsOpenSuccessModal,
	setIsOpenEventsListModal,
	setSearchedEvents,
	setCurrentDirection,
	setCurrentDate,
	setSelectedEvents,
} = eventsSlice.actions;
