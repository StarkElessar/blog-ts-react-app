import React, { FC, ReactElement, useState } from 'react';
import { Breadcrumb, Avatar, Space, Badge, Button } from 'antd';
import { LoadingOutlined, LogoutOutlined, NotificationFilled, UserOutlined } from '@ant-design/icons';

import Container from '../Layout/Container';
import HeaderSearch from './Search';
import styles from './index.module.scss';
import { useGetMeQuery, useLazyLogoutQuery, useLogoutQuery } from '../../store/services/authService';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { Paths } from '../../paths';

interface IBreadcrumbsLocation {
	id: string;
	path: string;
	title: string;
	url: string;
}

const Header: FC = (): ReactElement => {
	const navigate = useNavigate();
	const [ count, setCount ] = useState<number>(20);
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	const [ userLogout ] = useLazyLogoutQuery();
	const { logout } = useActions();

	const handleClickLogout = async () => {
		await userLogout();
		logout();
		localStorage.removeItem('accessToken');
		navigate(Paths.login());
	};

	return (
		<header className={styles.header}>
			<Container className={styles.headerContainer}>
				<>
					<Breadcrumb
						className={styles.title}
						items={[
							{ title: 'Home', },
						]}
					/>
					<HeaderSearch/>
					{isAuthenticated ? (
						<div className="header__actions">
							<Space size={25} wrap>
								<button className="color-theme"></button>
								<Button className={styles.headerBtn}>
									<Badge count={count} overflowCount={9}>
										<NotificationFilled style={{ fontSize: '20px' }}/>
									</Badge>
								</Button>
								<Button className={styles.headerBtn}>
									<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined color={'#fff'}/>}/>
								</Button>
								<Button
									icon={<LogoutOutlined/>}
									onClick={handleClickLogout}
								>
									Выйти
								</Button>
							</Space>
						</div>
					) : (
						<div className={styles.authGroup}>
							<NavLink to={'/login'}>
								<Button type="primary">Войти</Button>
							</NavLink>
							<NavLink to={'/register'}>
								<Button>Регистрация</Button>
							</NavLink>
						</div>
					)}
				</>
			</Container>
		</header>
	);
};

export default Header;
