import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { LoadingOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { Paths } from '../../paths';
import { AuthContainer } from '../../components';
import { IRequestUserLogin } from '../../types/user/userLogin.interface';
import { useLoginMutation } from '../../store/services/authService';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';
import styles from '../Register/index.module.scss';

const Login = () => {
	const navigate = useNavigate();
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ loginUser ] = useLoginMutation();
	const [ messageApi, contextHolder ] = message.useMessage();

	const handleSubmit = async (values: IRequestUserLogin): Promise<void> => {
		setIsLoading(true);
		try {
			await loginUser(values).unwrap();
			await messageApi.open({ type: 'success', content: 'Авторизация прошла успешно', });
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
			<h2 className={styles.title}>Авторизация</h2>
			<Form
				name="login"
				className="login-form"
				initialValues={{ remember: true }}
				layout={'vertical'}
				onFinish={handleSubmit}
			>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: 'Введите адрес электронной почты!' },
						{ type: 'email', message: 'Адрес электронной почты не корректный!' }
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
					]}
					label="Пароль"
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
						icon={isLoading && <LoadingOutlined/>}
					>
						Войти
					</Button>
					или
					<Button
						type="link"
						disabled={isLoading}
						onClick={() => navigate(Paths.register())}
					>
						Зарегистрироваться сейчас!
					</Button>
				</Form.Item>
			</Form>
		</AuthContainer>
	);
};

export default Login;
