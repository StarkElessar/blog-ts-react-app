import { useState } from 'react';
import { Button, Divider, Space, Select, Card } from 'antd';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useFetchBreedsQuery } from '../../store/services/dogsApi';
import { useActions } from '../../hooks/useActions';
import MiniLoader from '../../ui/MainLoader/MiniLoader';
import { useLazyGetUsersQuery } from '../../store/services/userService';

const Home = () => {
	const { amountedAdded, incremented } = useActions();
	const { counter: { value }, auth: { isAuthenticated } } = useAppSelector((state) => state);
	const [ numDogs, setNumDogs ] = useState<number>(5);
	const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
	const [ getUsers, { isLoading, data: usersData } ] = useLazyGetUsersQuery();

	const handleChange = (value: string) => {
		setNumDogs(Number(value));
	};

	const handleGetUsers = async () => {
		await getUsers().unwrap();
	};

	return (
		<div>
			<Divider/>
			<h1>Главная страница</h1>
			<div>Мой счетчик: {value}</div>
			<Divider/>
			<Space size={20}>
				<Button onClick={() => incremented()}>Увеличить счетчик на +1</Button>
				<Button onClick={() => amountedAdded(20)}>Увеличить счетчик на +20</Button>
			</Space>
			<Divider/>
			<Button disabled={!isAuthenticated} onClick={handleGetUsers}>Получить список пользователей:</Button>
			<Card title="Список пользователей" bordered={false} style={{ width: 300 }}>
				{
					isLoading ? <div>Loading...</div> : usersData ? (usersData.map((user) => {
						return (
							<p key={user.id}>{user.email}</p>
						);
					})) : (<div>Нет зарегистрированных пользователей</div>)
				}
			</Card>
			<Divider/>
			<div style={{ marginBottom: 10 }}>Number of dogs fetched: {data.length}</div>
			<Select
				defaultValue="10"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: '10', label: '10 Cards' },
					{ value: '20', label: '20 Cards' },
					{ value: '30', label: '30 Cards' },
					{ value: '40', label: '40 Cards' },
				]}
			/>
			<Divider/>
			<br/>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
				{
					data.map((breed) => (
						isFetching ? (
							<div key={breed.id}
							     style={{
								     position: 'relative',
								     height: '240px',
								     display: 'flex',
								     alignItems: 'center',
								     justifyContent: 'center'
							     }}
							>
								<MiniLoader/>
							</div>
						) : (
							<div key={breed.id}>
								<div style={{ marginBottom: 10, fontWeight: 700 }}>{breed.name}</div>
								<div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
									<img
										style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
										src={breed.image.url}
										alt={breed.name}
										height={250}
									/>
								</div>
							</div>
						)
					))
				}
			</div>
		</div>
	);
};

export default Home;
