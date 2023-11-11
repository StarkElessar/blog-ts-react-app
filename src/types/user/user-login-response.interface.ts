export interface IResponseUserLogin {
	user: {
		id: number;
	};
	accessToken: string;
	refreshToken: string;
}
