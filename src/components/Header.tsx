import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from '../utils/constants';
import logo from './../assets/images/logo-groovy.png';
import SearchIcon from './svg-components/SearchIcon';
import HeaderMenu from './HeaderMenu';

const Header = () => {
	const onSearchClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		console.log(event);
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__block">
					<Link to={ PATHS.home } className="logo header__logo">
						<img src={ logo } alt="Logo Groovy"/>
					</Link>

					<HeaderMenu/>

					<button className="header__search-icon" onClick={ onSearchClickHandler }>
						<SearchIcon/>
					</button>
					<button className="button">Войти</button>
					<button className="button">Создать аккаунт</button>
				</div>
			</div>
		</header>
	);
};

export default Header;