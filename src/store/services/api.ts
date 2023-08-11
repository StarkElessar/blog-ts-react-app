import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
	retry
} from '@reduxjs/toolkit/query/react';

import { RootState } from '../index';
import { actions as actionsToken } from '../slices/tokenSlice';
import { IResponseUserLogin } from '../../types/user/userLoginResponse.interface';

const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.REACT_APP_API_URL}/api`,
	credentials: 'include',
	prepareHeaders: (headers: Headers, { getState }): Headers => {
		const { token: { accessToken } } = getState() as RootState;
		const token = accessToken || localStorage.getItem('accessToken');
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	}
});

const baseQueryWithRetry = retry(baseQuery, {
	maxRetries: 1,
});

type TQueryWithReAuth = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>

const baseQueryWithReAuth: TQueryWithReAuth = async (args, api, extraOptions) => {
	let result = await baseQueryWithRetry(args, api, extraOptions);

	if (result?.error?.status === 401) {
		const { token: { stopRefresh } } = api.getState() as RootState;
		if (!stopRefresh) {
			api.dispatch(actionsToken.stopRefresh(true));

			/**
			 * try to get new token
			 * */
			const response = await baseQueryWithRetry({ url: '/auth/refresh', method: 'GET' }, api, extraOptions);
			const data = response.data as IResponseUserLogin;
			if (data) {
				api.dispatch(actionsToken.addToken(data.accessToken));
				localStorage.setItem('accessToken', data.accessToken);

				/**
				 * retry the initial query
				 * */
				result = await baseQueryWithRetry(args, api, extraOptions);
			} else {
				api.dispatch(actionsToken.clearStateAndRedirectLogin(true));
			}
		}

		api.dispatch(actionsToken.stopRefresh(false));
	}

	return result;
};

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithReAuth,
	refetchOnMountOrArgChange: true,
	endpoints: () => ({}),
});
