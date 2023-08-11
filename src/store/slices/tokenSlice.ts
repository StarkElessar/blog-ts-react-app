import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
	accessToken: string | null,
	isClearStateAndRedirectLogin: boolean,
	stopRefresh: boolean,
}

const initialState: IInitialState = {
	accessToken: null,
	isClearStateAndRedirectLogin: false,
	stopRefresh: false,
}

const slice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		clearStateAndRedirectLogin: (state, action: PayloadAction<boolean>) => {
			state.isClearStateAndRedirectLogin = action.payload;
		},

		addToken: (state, action: PayloadAction<string | null>) => {
			state.accessToken = action.payload;
		},

		stopRefresh: (state, action: PayloadAction<boolean>) => {
			state.stopRefresh = action.payload;
		},
	}
})

export const { actions, reducer} = slice;
