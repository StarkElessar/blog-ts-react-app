import { api } from './api';
import { IResponseUserRegister } from '../../types/user/userRegisterResponse.interface';
import { IRequestUserRegister } from '../../types/user/userRegister.interface';
import { IUserModel } from '../../types/user/userModel.interface';
import { IRequestUserLogin } from '../../types/user/userLogin.interface';
import { IResponseUserLogin } from '../../types/user/userLoginResponse.interface';

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
