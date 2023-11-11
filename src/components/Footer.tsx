import './../assets/scss/components/footer.scss';

import React from 'react';

import { Categories } from './categories/Categories';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__block'>
          <div>groovy</div>
          <h2>Recent Posts</h2>
          <div>
            <h2 className='footer__label label'>Tag Cloud</h2>
            <div className='categories-footer-container'>
              <Categories />
            </div>
          </div>
          <h2>Follow me!</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;