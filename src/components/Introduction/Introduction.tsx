import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyImage from '../../assets/images/image.jpg';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Stefan,'];
  const jobArray = [...'oftware enginer'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
&nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <img src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png' className='intro__logos' alt='' />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
        </h1>
        <h2 className='intro__headingSecondary'>Full Stack Developer / Software Engineer</h2>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='intro__right'>
        <div>
          <img src={MyImage} alt="My Image" style={{width: "100%", borderRadius: "50%", borderColor: "white", borderWidth: "3px", outline: '3px solid'}}/>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
