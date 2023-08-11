import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './index.module.scss';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}

const Container: FC<IProps> = ({ children, className }): ReactElement => {
	return (
		<div className={[ styles.container, className ].join(' ')}>
			{children}
		</div>
	);
};

export default Container;
