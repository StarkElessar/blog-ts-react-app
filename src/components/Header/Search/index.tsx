import { FC, FocusEventHandler, ReactElement, useState } from 'react';
import { Input, Space } from 'antd';

import styles from './index.module.scss';

const HeaderSearch: FC = (): ReactElement => {
	const [ value, setValue ] = useState<string>('');
	const [ isFocus, setIsFocus ] = useState<boolean>(false);
	const onSearch = (value: string) => console.log(value);

	return (
		<Input.Search
			placeholder="Поиск по блогу"
			allowClear
			onSearch={onSearch}
			value={value}
			onChange={({ target }) => setValue(target.value)}
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
			style={{ width: isFocus ? 600 : 200 }}
			className={styles.input}
		/>
	);
};

export default HeaderSearch;
