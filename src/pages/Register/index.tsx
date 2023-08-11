import { NavLink, useNavigate } from 'react-router-dom';
import { FC, ReactElement, useState } from 'react';
import { LoadingOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { MessageType } from 'antd/es/message/interface';

import styles from './index.module.scss';
import { useRegisterMutation } from '../../store/services/authService';
import { AuthContainer } from '../../components';
import { IRequestUserRegister } from '../../types/user/userRegister.interface';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';
import { Paths } from '../../paths';

interface IRegisterError {
	data: {
		message: string,
		errors?: any[]
	},
	status: number
}

const Register: FC = (): ReactElement => {
	const navigate = useNavigate();
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ messageApi, contextHolder ] = message.useMessage();
	const [ setRegister ] = useRegisterMutation();

	const handleSubmit = async (values: IRequestUserRegister): Promise<void> => {
		setIsLoading(true);
		try {
			const { accessToken } = await setRegister(values).unwrap();
			await messageApi.open({ type: 'success', content: 'Регистрация прошла успешно', });
			localStorage.setItem('accessToken', accessToken);
			navigate(Paths.home());
		} catch (err) {
			const maybeError = isErrorWithMessage(err);
			await messageApi.open({ type: 'error', content: maybeError ? err.data.message : 'Неизвестная ошибка', });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthContainer>
			{contextHolder}
			<h2 className={styles.title}>Регистрация</h2>
			<Form
				name="register"
				className="login-form"
				initialValues={{ remember: true }}
				layout={'vertical'}
				onFinish={handleSubmit}
			>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: 'Введите адрес электронной почты!' },
						{ type: 'email', message: 'Адрес электронной почты не валидный!' }
					]}
					label="E-mail"
				>
					<Input
						prefix={<MailOutlined className="site-form-item-icon"/>}
						placeholder="E-mail"
						disabled={isLoading}
					/>
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{ required: true, message: 'Пожалуйста введите пароль!' },
						{ min: 5, message: 'Пароль не может быть меньше 5 символов!' },
						{
							pattern: /^(?=.*\d).+$/,
							message: 'Пароль должен содержать хотя бы 1 цифру!'
						},
						{
							pattern: /^(?=.*[A-Z]).+$/,
							message: 'Пароль должен содержать хотя бы 1 заглавную букву!'
						},
					]}
					label="Password"
				>
					<Input.Password
						prefix={<LockOutlined className="site-form-item-icon"/>}
						type="password"
						placeholder="Пароль"
						disabled={isLoading}
					/>
				</Form.Item>

				<Form.Item className={styles.formBottom}>
					<Button
						type="primary"
						htmlType="submit"
						className={[ styles.submitBtn, 'login-form-button' ].join(' ')}
						disabled={isLoading}
						icon={isLoading && <LoadingOutlined/>}
					>
						Создать аккаунт
					</Button>
					или
					<Button
						type="link"
						disabled={isLoading}
						onClick={() => navigate(Paths.login())}
					>
						Авторизоваться!
					</Button>
				</Form.Item>
			</Form>
		</AuthContainer>
	);
};

export default Register;
