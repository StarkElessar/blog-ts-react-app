export interface IRequestUserRegister {
	email: string;
	password: string;
	role?: 'user' | 'admin';
}
