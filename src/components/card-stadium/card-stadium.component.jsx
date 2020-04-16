import React from 'react';

import './card-stadium.styles.scss';

import { ReactComponent as IphoneStadium } from '../../assets/iphone_stadium.svg';

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
    <IphoneStadium />
  </div>
</div>
);

export default CardStadium;