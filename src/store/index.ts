import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from './services/api';
import { dogsApi } from './services/dogsApi';
import { listenerMiddleware } from '../utils/authMiddleware';
import { reducer as authReduce } from './slices/authSlice';
import { reducer as tokenReduce } from './slices/tokenSlice';
import { reducer as counterReducer } from './slices/counterSlice';

const rootReducer = combineReducers({
	auth: authReduce,
	token: tokenReduce,
	counter: counterReducer,
	[api.reducerPath]: api.reducer,
	[dogsApi.reducerPath]: dogsApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat([ listenerMiddleware.middleware ])
		.concat([ api.middleware ])
		.concat([ dogsApi.middleware ])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
