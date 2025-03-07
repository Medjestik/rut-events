import { combineSlices } from '@reduxjs/toolkit';
import { eventsSlice } from './events/reducer';

export const rootReducer = combineSlices(eventsSlice);
