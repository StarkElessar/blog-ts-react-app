import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRegisterMutation } from '../store/services/authService';
import { IRequestUserRegister } from '../types/user/userRegister.interface';

const initialFormData: IRequestUserRegister = {
	email: '',
	password: '',
	confirmPassword: '',
};

export const RegisterPage = () => {
	const [formData, setFormData] = useState<IRequestUserRegister>(initialFormData);
	const [setRegister, { isLoading }] = useRegisterMutation();

	const onChangeInputHandler = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	}

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		console.log(formData);

		try {
			await setRegister(formData).unwrap();
		} catch (error) {
			console.error('Какая то ошибка', error);
		}
	};

	return (
		<div>
			Register Page
			<form onSubmit={onSubmitHandler}>
				<input type="email" name="email" className="input" placeholder="User Email" value={formData.email} onChange={onChangeInputHandler} disabled={isLoading}/>
				<input type="password" name="password" className="input" placeholder="Password" value={formData.password} onChange={onChangeInputHandler} disabled={isLoading}/>
				<input type="password" name="confirmPassword" className="input" placeholder="Confirm Password" value={formData.confirmPassword} onChange={onChangeInputHandler} disabled={isLoading}/>
				<button type="submit" disabled={isLoading}>Зарегистрироваться</button>
			</form>
		</div>
	);
};