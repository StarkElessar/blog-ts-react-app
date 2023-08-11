import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../store/services/authService';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	matcher: authApi.endpoints.login.matchFulfilled,
	effect: async (action, api) => {
		api.cancelActiveListeners();

		if (action.payload.accessToken) {
			localStorage.setItem('accessToken', action.payload.accessToken);
		}
	}
});
