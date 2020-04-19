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
        <img src={dinheiroVivo} alt='Dinheiro Vivo'></img>
        <p>BBox Sports. Surpresas</p>
        <p>para fãs de futebol cabem</p>
        <p>numa caixa</p>
        <p>December 15, 2019</p>
      </div>
      <div className='image margin-top'>
        <img src={sapo} alt='Sapo'></img>
        <p>O clube do seu coração pode</p>
        <p>revelar-se uma caixinha de sur-</p>
        <p>presas e a BBox Sports quer certi-</p>
        <p>ficar-se disso</p>
        <p>March 09, 2020</p>
      </div>
      <div className='image margin-top'>
        <img src={jornalEconomico} alt='Jornal Económico'></img>
        <p>Portugueses criam caixa mágica</p>
        <p>com produtos de clubes e</p>
        <p>querem levá-la aos adeptos do</p>
        <p>mundo inteiro</p>
        <p>January 08, 2020</p>
      </div>
    </div>
  </div>
);

export default Press;