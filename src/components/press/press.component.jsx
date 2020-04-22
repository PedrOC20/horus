import React from 'react';

import dinheiroVivo from '../../assets/dinheiro_vivo.png';
import sapo from '../../assets/sapo.png';
import jornalEconomico from '../../assets/jornal_economico.png';

import './press.styles.scss';

const Press = () => (
  <div id='press' className='press'>
    <h1 className='title'>WHAT DOES THE PRESS SAY ABOUT US</h1>
    <div className='images'>
      <div className='image'>
        <img src={dinheiroVivo} alt='Dinheiro Vivo' className='image-block'></img>
        <div>
          <p>BBox Sports. Surpresas</p>
          <p>para fãs de futebol cabem</p>
          <p>numa caixa</p>
        </div>
        <p>December 15, 2019</p>
      </div>
      <div className='image margin-top'>
        <img src={sapo} alt='Sapo' className='image-block'></img>
        <div>
          <p>O clube do seu coração pode</p>
          <p>revelar-se uma caixinha de</p>
          <p>surpresas e a BBox Sports quer</p>
          <p>certificar-se disso</p>
        </div>
        <p>March 09, 2020</p>
      </div>
      <div className='image margin-top'>
        <img src={jornalEconomico} alt='Jornal Económico' className='image-block'></img>
        <div>
          <p>Portugueses criam caixa mágica</p>
          <p>com produtos de clubes e</p>
          <p>querem levá-la aos adeptos do</p>
          <p>mundo inteiro</p>
        </div>
        <p>January 08, 2020</p>
      </div>
    </div>
  </div>
);

export default Press;