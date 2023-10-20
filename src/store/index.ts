import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from './services/api';
import { listenerMiddleware } from '../utils/authMiddleware';
import { reducer as authReduce } from './slices/authSlice';
import { reducer as tokenReduce } from './slices/tokenSlice';
import { reducer as counterReducer } from './slices/counterSlice';

const rootReducer = combineReducers({
	auth: authReduce,
	token: tokenReduce,
	counter: counterReducer,
	[api.reducerPath]: api.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat([ listenerMiddleware.middleware ])
		.concat([ api.middleware ])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
