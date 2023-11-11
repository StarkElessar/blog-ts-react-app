import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import RecentPostItem from './RecentPostItem';

import postImage from './../assets/images/recent-post-items/01.jpg';
import { IRecentPost } from '../types';

const RECENT_POSTS: IRecentPost[] = [
	{
		id: crypto.randomUUID(),
		number: 1,
		image: postImage,
		title: 'The spectacle before us was indeed sublime',
		date: new Date('9.26.2019'),
	},
	{
		id: crypto.randomUUID(),
		number: 2,
		image: postImage,
		title: 'Far far away, behind the word mountains',
		date: new Date('11.9.2023'),
	},
	{
		id: crypto.randomUUID(),
		number: 3,
		image: postImage,
		title: 'Musical improvisation is the spontaneous music',
		date: new Date('11.10.2023 20:19:20'),
	},
];


// тестовые данные
const categories = [
    {categoryName: "Health", color: "#83ea6d"},
    {categoryName: "Music", color: "#84b2f4"},
    {categoryName: "Lifestyle", color: "#ffd001"},
    {categoryName: "Health", color: "#fa0899"},
    {categoryName: "Technology", color: "#c4c5fe"},
    {categoryName: "Nature", color: "#48dfd4"},
]
export const RootLayout = () => {
	return (
		<div className="wrapper">
			<div className="wrapper__page">
				<Header/>

				<main className="main-content">
					<div className="main-content__container">
						<Outlet/>

						<aside className="main-content__right sidebar">
							<div className="sidebar__item item-sidebar">
								<h2 className="item-sidebar__label">Recent Posts</h2>
								{
									RECENT_POSTS.map((post) => (
										<RecentPostItem key={post.id} { ...post }/>
									))
								}
							</div>
						</aside>
					</div>
				</main>

				<Footer/>
			</div>
		</div>
	);
};