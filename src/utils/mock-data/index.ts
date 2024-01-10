import { ICategories, IRecentPost } from '../../types';
import postImage from '../../assets/images/recent-post-items/01.jpg';
// import { getId } from '../index';



export const RECENT_POSTS: IRecentPost[] = [
  {
    id: crypto.randomUUID(),
    number: 1,
    image: postImage,
    title: 'The spectacle before us was indeed sublime',
    date: new Date('9.26.2019'),
  },
  {
    id: crypto.randomUUID(),
    number: 2,
    image: postImage,
    title: 'Far far away, behind the word mountains',
    date: new Date('11.9.2023'),
  },
  {
    id: crypto.randomUUID(),
    number: 3,
    image: postImage,
    title: 'Musical improvisation is the spontaneous music',
    date: new Date('11.10.2023 20:19:20'),
  },
];

// тестовые данные
export const CATEGORIES: ICategories[] = [
  { categoryName: 'Health', color: '#83ea6d', id: crypto.randomUUID() },
  { categoryName: 'Music', color: '#84b2f4', id: crypto.randomUUID() },
  { categoryName: 'Lifestyle', color: '#ffd001', id: crypto.randomUUID() },
  { categoryName: 'Health', color: '#fa0899', id: crypto.randomUUID() },
  { categoryName: 'Technology', color: '#c4c5fe', id: crypto.randomUUID() },
  { categoryName: 'Nature', color: '#48dfd4', id: crypto.randomUUID() },
];