import React from 'react';

import './banner.styles.scss';

import { ReactComponent as Icon } from '../../assets/icon.svg';

import appleButton from '../../assets/button_apple.png';
import androidButton from '../../assets/button_android.png';

const Banner = () => (
  <div id='banner' className='banner'>
    <div className='informations'>
      <div className='icon-container'>
        <Icon className='icon' />
      </div>
      <div className='information'>
        <h1>LET YOUR SPORTS TEAM GET INSIDE YOUR FANS MOBILE</h1>
        <p>Are you feeling disconnected with your fans?</p>
        <p>Would you like to know more about them?</p>
        <p>Do you want to find new and fun ways to interact with them?</p>
        <p>Well we might have something</p>
        <p>really interesting for you!</p>
        <a href='#contact' className='interest-button'>I'M INTERESTED</a>
      </div>
      <div className='app-information'>
        <div className='app-title'>
          <h1>BBOX SPORTS AR APP</h1>
          <p>Be the first to live the AR experience!</p>
        </div>
        <div className='app-buttons'>
          <a href='https://apps.apple.com/us/app/bbox-sports/id1491379643' target='_blank' rel="noopener noreferrer"><img src={appleButton} alt='IOS Button'></img></a>
          <a href='https://play.google.com/store/apps/details?id=com.ontop.bbox&hl=en_US' target='_blank' rel="noopener noreferrer" className='android-button'><img src={androidButton} alt='Android Button'></img></a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;