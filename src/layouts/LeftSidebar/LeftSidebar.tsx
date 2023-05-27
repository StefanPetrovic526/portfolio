import React from 'react';
import './leftSidebar.scss';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>
        <li className='left__linkItems'>
          <a href='https://codepen.io/StefanPetrovic526' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-codepen' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://github.com/StefanPetrovic526' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-github' />
            </svg>
          </a>
        </li>
      </ul>
      <div className='left__line' />
    </main>
  </div>
);

export default LeftSideBar;
