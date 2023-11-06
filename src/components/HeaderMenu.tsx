import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../utils/constants';

const HeaderMenu = () => {
	return (
		<nav className="menu header__menu">
			<ul className="menu__list">
				<li>
					<NavLink to={PATHS.home} className="menu__link">Home</NavLink>
				</li>
				<li>
					<NavLink to={PATHS.posts} className="menu__link">Список постов</NavLink>
				</li>
				<li>
					<NavLink to={PATHS.contact} className="menu__link">Контакты</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderMenu;