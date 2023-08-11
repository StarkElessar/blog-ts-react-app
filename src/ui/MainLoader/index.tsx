import React, { FC, ReactElement } from 'react';
import styles from './index.module.scss'

const MainLoader: FC = (): ReactElement => {
	return (
		<div className={styles['loader-container']}>
			<span className={styles.loader}></span>
		</div>
	);
};

export default MainLoader;
