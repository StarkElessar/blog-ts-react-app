import { ILoginError } from '../types/errorMessage.interface';

export const isErrorWithMessage = (error: unknown): error is ILoginError => {
	console.log('isErrorWithMessage', error);
	return (
		typeof error === 'object' &&
		error !== null &&
		'data' in error &&
		typeof (error as Record<string, unknown>).data === 'object'
	);
};
