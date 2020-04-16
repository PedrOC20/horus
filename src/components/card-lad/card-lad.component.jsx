import React from 'react';

import './card-lad.styles.scss';

import { ReactComponent as CardLuisao } from '../../assets/card_luisao.svg';
import { ReactComponent as Smartphone } from '../../assets/smartphone.svg';

const CardLad = () => (
  <div className='card-lad'>
    <div className='info-lad'>
      <h1>STORING TELLING IS THE NEW</h1>
      <h1>FORM OF COMMUNICATION</h1>
      <p>Fans have access to players</p>
      <p>stats, quotes, photos, but you can</p>
      <p>also promote sponsors, games, and</p>
      <p>other special ocasions!</p>
    </div>
    <div className='image-lad'>
      <Smartphone />
      <CardLuisao />
    </div>
  </div>
);

export default CardLad;