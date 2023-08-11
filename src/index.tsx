import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/scss/main.scss';

import { store } from './store';
import { Paths } from './paths';
import { Layout } from './components';
import { Home, Login, Register } from './pages';
import AuthLayout from './components/AuthLayout';

const rootElement = document.getElementById('root') as HTMLElement;

const router = createBrowserRouter([
	{
		path: Paths.home(),
		element: <Layout/>,
		children: [
			{ path: Paths.home(), element: <Home/> },
		],
	},
	{ path: Paths.register(), element: <Register/> },
	{ path: Paths.login(), element: <Login/> }
]);

ReactDOM.createRoot(rootElement).render(
	<Provider store={store}>
		<AuthLayout>
			<RouterProvider router={router}/>
		</AuthLayout>
	</Provider>
);
