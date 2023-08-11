import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Container from './Container';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Layout: FC = (): ReactElement => {
	return  (
		<div className='wrapper'>
			<Sidebar/>
			<div className="page">
				<Header/>
				<main className='content'>
					<Container>
						<Outlet/>
					</Container>
				</main>
			</div>
		</div>
	);
}

export default Layout;
