import { IUserData } from './user-data.interface';

export interface IResponseUserRegister {
	accessToken: string;
	refreshToken: string;
	user: IUserData;
}
