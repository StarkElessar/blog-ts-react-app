import { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

const PostPage: FC = (): ReactElement => {
	const params = useParams<{ id: string }>();

	return (
		<div>
			<h1>Post ID: { params.id }</h1>
		</div>
	);
};

export default PostPage;