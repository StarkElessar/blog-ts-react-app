export interface ILoginError {
	data: {
		message: string,
		errors?: any[]
	},
	status: number
}
