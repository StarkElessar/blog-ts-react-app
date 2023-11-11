import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICategories } from '../../types';
import HexagonIcon from '../svg-components/HexagonIcon';

export const Category: FC<ICategories> = ({ color, categoryName, id }) => {
  return (
    <Link to={`/category/${id}`} key={id} className={'category button-un-hover'}>
      <span className={'category__icon'}><HexagonIcon color={color} /></span>
      <span className={'category__name'}>{`${categoryName}`}</span>
    </Link>
  );
};