import { createSlice } from '@reduxjs/toolkit';

import { authApi } from '../services/authService';
import { IUserModel } from '../../types/user/user-model.interface';

interface IInitialState {
	user: IUserModel | null,
	isAuthenticated: boolean,
	accessToken: string | null,
}

const initialState: IInitialState = {
	user: null,
	isAuthenticated: false,
	accessToken: null,
};

export const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken;
				state.isAuthenticated = true;
			})
			.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken;
				state.isAuthenticated = true;
			})
			.addMatcher(authApi.endpoints.logout.matchFulfilled, (state, action) => {
				state = initialState;
			})
			.addMatcher(authApi.endpoints.getMe.matchFulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuthenticated = true;
			})
	}
});

export const { actions, reducer } = slice;
