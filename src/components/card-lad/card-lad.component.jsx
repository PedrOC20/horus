import React from 'react';

import './card-lad.styles.scss';

import cardLuisao from '../../assets/card_luisao.png';
import smartphoneLuisao from '../../assets/smartphone_luisao.png';

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
      <img src={smartphoneLuisao} alt='SMARTPHONE LUISÃO' className='smartphone-luisao'></img>
      <img src={cardLuisao} alt='CARD AR LUISÃO' className='card-luisao'></img>
    </div>
  </div>
);

export default CardLad;