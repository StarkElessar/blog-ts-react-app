import { api } from './api';
import { IResponseUserRegister } from '../../types/user/user-register-response.interface';
import { IRequestUserRegister } from '../../types/user/user-register.interface';
import { IUserModel } from '../../types/user/user-model.interface';
import { IRequestUserLogin } from '../../types/user/user-login.interface';
import { IResponseUserLogin } from '../../types/user/user-login-response.interface';

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation<IResponseUserRegister, IRequestUserRegister>({
			query: (credentials: IRequestUserRegister) => ({
				url: 'auth/register',
				method: 'POST',
				body: credentials
			})
		}),

		login: builder.mutation<IResponseUserLogin, IRequestUserLogin>({
			query: (credentials: IRequestUserLogin) => ({
				url: 'auth/login',
				method: 'POST',
				body: credentials
			})
		}),

		logout: builder.query<void, void>({
			query: () => ({
				url: 'auth/logout',
				method: 'GET'
			})
		}),

		getMe: builder.query<IUserModel, void>({
			query: () => ({
				url: 'auth/get-current-user',
				method: 'GET'
			})
		}),
	})
});

export const {
	useRegisterMutation,
	useGetMeQuery,
	useLoginMutation,
	useLogoutQuery,
	useLazyLogoutQuery,
} = authApi;
export const { endpoints: { login, register, getMe, logout } } = authApi;
