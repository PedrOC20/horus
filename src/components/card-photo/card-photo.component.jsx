import React from 'react';

import './card-photo.styles.scss';

import { ReactComponent as Players } from '../../assets/players.svg';
import { ReactComponent as IphonePhoto } from '../../assets/iphone_photo.svg';

const CardPhoto = () => (
  <div className='card-photo'>
    <div className='photo-info'>
      <Players className='players-photo' />
      <div className='info'>
        <h1>KNOW YOUR FANS BY MAKING THEM</h1>
        <h1>PART OF YOUR FAMILY!</h1>
        <p>Photo and Videos with players are now</p>
        <p>possible with BBox Sports AR app</p>
      </div>
    </div>
    <div className='image-photo'>
      <IphonePhoto className='iphone-photo' />
    </div>
  </div>
);

export default CardPhoto;