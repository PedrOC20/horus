import React from 'react';

import './card-stadium.styles.scss';

import smartphoneStadium from '../../assets/smartphone_stadium.png';

const CardStadium = () => (
  <div className='card-stadium'>
  <div className='info-stadium'>
    <h1>WHAT ABOUT ALL THOSE SUPER</h1>
    <h1>FANS THAT CAN'T COME TO YOU?</h1>
    <p>Not a problem! With BBox Sports AR app</p>
    <p>we can showcase the pitch, the lockers,</p>
    <p>the player bus, the Sports Team</p>
    <p>Museum and everything you wish!</p>
  </div>
  <div className='image-stadium'>
    <img src={smartphoneStadium} alt='SMARTPHONE STADIUM'></img>
  </div>
</div>
);

export default CardStadium;