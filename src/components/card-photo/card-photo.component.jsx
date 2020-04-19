import React from 'react';

import './card-photo.styles.scss';

import players from '../../assets/players.png';
import smartphoneLuisao from '../../assets/smartphone_photo_luisao.png';

const CardPhoto = () => (
  <div className='card-photo'>
    <div className='photo-info'>
      <img src={players} alt='PLAYERS' className='players-photo'></img>
      <div className='info'>
        <h1>KNOW YOUR FANS BY MAKING THEM</h1>
        <h1>PART OF YOUR FAMILY!</h1>
        <p>Photo and Videos with players are now</p>
        <p>possible with BBox Sports AR app</p>
      </div>
    </div>
    <div className='image-photo'>
      <img src={smartphoneLuisao} alt='SMARTPHONE LUISÃO' className='iphone-photo'></img>
    </div>
  </div>
);

export default CardPhoto;