import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import RecentPostItem from './RecentPostItem';

import { BlockLabel } from './ui/BlockLabel';
import { RECENT_POSTS } from '../utils/mock-data';

const Footer = lazy(() => import('./Footer'));

export const RootLayout = () => {
  return (
    <div className='wrapper'>
      <div className='wrapper__page'>
        <Header />

        <main className='main-content'>
          <div className='main-content__container'>
            <Outlet />
            <aside className='main-content__right sidebar'>
              <div className='sidebar__item item-sidebar'>
                <BlockLabel className='item-sidebar__label' title='Recent Posts' />
                {
                  RECENT_POSTS.map((post) => (
                    <RecentPostItem key={post.id} {...post} />
                  ))
                }
              </div>
            </aside>
          </div>
        </main>

        <Suspense fallback={<div>Footer loading...</div>}><Footer /></Suspense>
      </div>
    </div>
  );
};


