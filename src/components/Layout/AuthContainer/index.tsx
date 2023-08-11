import { FC, ReactElement, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const AuthContainer: FC<IProps> = ({ children }): ReactElement => {
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				{ children }
			</div>
		</div>
	);
};

export default AuthContainer;
