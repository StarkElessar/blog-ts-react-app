export interface IRequestUserRegister {
	email: string;
	password: string;
	confirmPassword: string;
	role?: 'user' | 'admin';
}
