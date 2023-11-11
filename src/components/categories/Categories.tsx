import React, { FC } from 'react';
import { Category } from './Category';
import { CATEGORIES } from '../../utils/mock-data';


export const Categories: FC = () => {

  return (
    <div className={'categories-container'}>
      {
        CATEGORIES.map((category) => (
          <Category key={category.id} { ...category } />
        ))
      }
    </div>
  );
};


