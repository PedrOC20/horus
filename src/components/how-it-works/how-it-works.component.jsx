import React from 'react';

import iconOne from '../../assets/icon1_how_it_works.png';
import iconTwo from '../../assets/icon2_how_it_works.png';
import iconThree from '../../assets/icon3_how_it_works.png';
import watch from '../../assets/watch.png';
import smartphone from '../../assets/smartphone_how_it_works.png';
import here from '../../assets/here.png';

import './how-it-works.styles.scss';

const HowItWorks = () => (
  <div className='how-it-works'>
    <div className='title'>
      <h1>BUT HOW DOES BBOX SPORTS AR WORKS?</h1>
      <p>It's as simple as 1, 2, 3!</p>
    </div>
    <div className='instructions'>
      <div className='instruction'>
        <img src={iconOne} alt='ICON 1'></img>
        <p>Download BBoxSports</p>
        <p>AR & Open your app</p>
      </div>
      <div className='instruction'>
        <img src={iconTwo} alt='ICON 2'></img>
        <p>Choose the Augmented</p>
        <p>Reality (AR) experience</p>
        <p>you want engage with</p>
      </div>
      <div className='instruction'>
        <img src={iconThree} alt='ICON 3'></img>
        <p>Follow the scan instruc-</p>
        <p>tions and welcome to a</p>
        <p>whole new world, where AR</p>
        <p>will surprise your mind!</p>
      </div>
    </div>
    <div className='images'>
      <div className='image image-rotate'>
        <img src={watch}  alt='WATCH'></img>
      </div>
      <div className='image'>
        <img src={smartphone} alt='SMARTPHONE'></img>
      </div>
      <div className='image image-rotate'>
        <img src={here} alt='HERE'></img>
      </div>
    </div>
  </div>
);

export default HowItWorks;