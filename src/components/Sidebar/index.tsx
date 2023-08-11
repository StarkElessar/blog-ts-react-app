import React from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { AntDesignOutlined, AppstoreOutlined, LogoutOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import styles from './index.module.scss';
import Container from '../Layout/Container';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group',): MenuItem => ({
	key,
	icon,
	children,
	label,
	type,
} as MenuItem);

const items: MenuProps['items'] = [
	getItem('Главная', '/', <AntDesignOutlined/>),
	getItem('Профиль', '/profile', <SettingOutlined/>),
	getItem('Выйти', '/logout', <LogoutOutlined/>),
];

const Sidebar = () => {
	const navigate = useNavigate();
	const onClick: MenuProps['onClick'] = ({ key }): void => {
		//navigate(key);
	};

	return (
		<aside className={styles.sidebar}>
			<Container>
				<div className={styles.header}>
					<NavLink to={'/'} className={styles.logo}>Joblog</NavLink>
				</div>

				<Menu
					onClick={onClick}
					style={{ backgroundColor: 'transparent' }}
					defaultSelectedKeys={[ '/' ]}
					mode="vertical"
					items={items}
					theme={'dark'}
				/>
			</Container>
		</aside>
	);
};

export default Sidebar;
