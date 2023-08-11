import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0
};

const slice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incremented: (state) => {
			state.value++;
		},
		amountedAdded: (state, action) => {
			state.value += action.payload;
		}
	}
});

export const { actions, reducer } = slice;
