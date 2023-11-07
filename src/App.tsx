import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from './utils/constants';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/HomePage';
import PostPage from './pages/PostPage';
import AllPostsPage from './pages/AllPostsPage';
import ContactPage from './pages/ContactPage';

export const App = () => {
	return (
		<Routes>
			<Route path={PATHS.home} element={<RootLayout/>}>
				<Route index element={<HomePage/>}/>
				<Route path={PATHS.post} element={<PostPage/>}/>
				<Route path={PATHS.posts} element={<AllPostsPage/>}/>
				<Route path={PATHS.contact} element={<ContactPage/>}/>
			</Route>

			{/*TODO: заменить на страницу NotFoundPage*/}
			<Route path={PATHS.noMatch} element={<Navigate to={PATHS.home}/>}/>
		</Routes>
	);
};