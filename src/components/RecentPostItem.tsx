import { FC } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../utils/format-date';
import { IRecentPost } from '../types';

interface IProps extends IRecentPost {}

const RecentPostItem: FC<IProps> = ({ id, date, number, title, image}) => {
	const formattedDate: string = formatDate(date);
	const url: string = '/post/' + id;

	return (
		<article className="recent-post-item">
			<Link to={url} className="recent-post-item__picture">
				<div className="recent-post-item__image">
					<img src={image} alt="Image"/>
				</div>
				<div className="recent-post-item__number">{number}</div>
			</Link>
			<div className="recent-post-item__body">
				<h4 className="recent-post-item__title">
					<Link to={url}>{title}</Link>
				</h4>
				<time className="recent-post-item__time" dateTime={date.toDateString()}>{formattedDate}</time>
			</div>
		</article>
	);
};

export default RecentPostItem;