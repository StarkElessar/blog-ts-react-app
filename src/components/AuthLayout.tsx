import { FC, ReactElement } from 'react';
import { useGetMeQuery } from '../store/services/authService';
import { MainLoader } from '../ui';

const AuthLayout: FC<{ children: ReactElement }> = ({ children }) => {
	const { isLoading } = useGetMeQuery();

	if (isLoading) {
		return <MainLoader/>;
	}

	return children;
};

export default AuthLayout;
