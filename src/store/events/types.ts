export interface IEventsStore {
	events: IEvent[];
	filteredEvents: IEvent[];
	searchedEvents: IEvent[];
	selectedEvents: IEvent[];
	currentDirection: string | null;
	possibleDirections: string[];
	currentDate: string | null;
	possibleDates: string[];
	isOpenRequestModal: boolean;
	isOpenSuccessModal: boolean;
	isOpenEventsListModal: boolean;
	loading: boolean;
	error: string | null;
	isLoadingRequest: boolean;
}

export interface IEvent {
	classroom: string;
	date: string;
	department: string;
	direction: string;
	discipline: string;
	end_time: string;
	group: string;
	id: number;
	level: number;
	profile: string;
	start_time: string;
	tutor: string;
	type: string;
	weekday: string;
}

export interface ICreateEventsRequest {
	name: string;
	school: string;
	classNumber: string;
	phone: string;
	events: number[];
}

export interface IMessageResponse {
	success: boolean;
	message: string;
}
