import { IUserData } from './userData.interface';

export interface IResponseUserRegister {
	accessToken: string;
	refreshToken: string;
	user: IUserData;
}
