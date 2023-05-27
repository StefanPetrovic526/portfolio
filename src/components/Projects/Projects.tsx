import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dzyybwqhc/image/upload/v1685185570/SNGOUT2103_gh4vkw.jpg' alt='Project1' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://github.com/yashfalke77/Color-palette-Project' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>WordPress Eco Social Landing Site</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              My client's goal was to create a WordPress Landing Page that would help them generate leads and convert visitors to customers.
I also implemented custom features on the landing page, including forms, pop-ups, and A/B testing tools, to help the client track user behavior and improve results.
The client was extremely satisfied with the project and has continued to work with us on additional landing pages for their other products.
              </p>
              <div className='project__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
              <div className='project__icons'>
                <a href='https://hddev.velvetblues.com' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>3D MetaVerse Project</h2></a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
              My client's goal was to create an immersive 3D metaverse experience that allowed users to explore a virtual world and interact with each other.
I also collaborated with the design team to ensure that the visuals and gameplay were optimized for a seamless user experience.
Users enjoyed the interactive gameplay, virtual economy, and social aspects of the game, which resulted in a high level of engagement and retention.
              </p>
              <div className='project__tags'>
                React.js &nbsp;
                Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Cloudinary &nbsp; ejs
                {' '}

              </div>
              <div className='project__icons project__icons1'>
                <a href='' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img className='project__img' src='https://res.cloudinary.com/dzyybwqhc/image/upload/v1685185742/Dynamic_Metaverse_fbdsit.png' alt='Project2' />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dzyybwqhc/image/upload/v1685186097/SNGOUT2101_r6ik2k.jpg' alt='Project3' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='http://www.porsche.dk/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Product Portal System</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              My client's goal was to build a modern e-commerce website that would appeal to their target audience and increase online sales.
I also collaborated with the development team to ensure that the design was implemented accurately and efficiently.
The website also received positive feedback from users and was recognized by industry experts for its innovative design and outstanding user experience
              </p>
              <div className='project__tags'> Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript</div>
              <div className='project__icons'>
                <a href='http://www.porsche.dk/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/yashfalke77/food-ordering-app' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://youtu.be/Bm6oUdohS9M' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>WordPress Eco Social Landing Site</div>
              <p className='projectResp__cardBodyDescription'>
              My client's goal was to create a WordPress Landing Page that would help them generate leads and convert visitors to customers.
I also implemented custom features on the landing page, including forms, pop-ups, and A/B testing tools, to help the client track user behavior and improve results.
The client was extremely satisfied with the project and has continued to work with us on additional landing pages for their other products.
              </p>
              {' '}

            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/yashfalke77/iNotebook' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://youtu.be/MF7xbfKyaEk' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>MetaVerse Project</div>
              <p className='projectResp__cardBodyDescription'>
              My client's goal was to create an immersive 3D metaverse experience that allowed users to explore a virtual world and interact with each other.
I also collaborated with the design team to ensure that the visuals and gameplay were optimized for a seamless user experience.
Users enjoyed the interactive gameplay, virtual economy, and social aspects of the game, which resulted in a high level of engagement and retention.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                React.js &nbsp;
                Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Cloudinary &nbsp; ejs

              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/yashfalke77/Natours-project' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://codepen.io/yashfalke77/pen/zYpvOBo' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Product Portal System</div>
              <p className='projectResp__cardBodyDescription'>
              My client's goal was to build a modern e-commerce website that would appeal to their target audience and increase online sales.
I also collaborated with the development team to ensure that the design was implemented accurately and efficiently.
The website also received positive feedback from users and was recognized by industry experts for its innovative design and outstanding user experience
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript</div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
