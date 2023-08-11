import { api } from './api';
import { IUserModel } from '../../types/user/userModel.interface';

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<IUserModel[], void>({
			query: () => ({
				url: 'user/all',
				method: 'GET'
			})
		}),
	}),
});

export const { useLazyGetUsersQuery } = userApi;
export const { endpoints: { getUsers } } = userApi;
