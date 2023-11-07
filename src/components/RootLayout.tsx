import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export const RootLayout = () => {
	return (
		<div className="wrapper">
			<div className="wrapper__page">
				<Header/>

				<main className="main-content">
					<div className="main-content__container">
						<Outlet/>

						<aside className="main-content__right sidebar">
							<h2>Side Bar</h2>
						</aside>
					</div>
				</main>

				<Footer/>
			</div>
		</div>
	);
};