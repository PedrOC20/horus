import React from 'react';

import iconOne from '../../assets/icon1_team_sports.png';
import iconTwo from '../../assets/icon2_team_sports.png';
import iconThree from '../../assets/icon3_team_sports.png';
import iconFour from '../../assets/icon4_team_sports.png';
import dashboard from '../../assets/dashboard.png';
import arrowOne from '../../assets/arrow_1.png';
import arrowTwo from '../../assets/arrow_2.png';
import arrowThree from '../../assets/arrow_3.png';
import bigArrow from '../../assets/big_arrow.png';


import './team-sports.styles.scss';

const TeamSports = () => (
  <div id='team-sports' className='team-sports'>
    <div className='container'>
      <div className='title'>
        <h1>WHAT'S IN IT FOR YOU AS A SPORTS TEAM?</h1>
        <span>LADS COLLECTIBLES are a fun, engaging way to be part of the Sports Team. By accessing
        Augmented Reality (AR) through this LADS the fans can take pictures with players, visit
        stadiums get custom messages and share all this with friends across social media</span>
      </div>
      <div className='images'>
        <div className='image-left'>
          <div className='stages'>
            <img src={iconOne} alt='Icon 1'></img>
            <p>Knowing the needs</p>
            <p>of your fans.</p>
            <img src={arrowOne} alt='Arrow 1'></img>
            <img src={iconTwo} alt='Icon 2'></img>
            <p>Create fun and exciting</p>
            <p>AR content.</p>
            <img src={arrowTwo} alt='Arrow 2'></img>
            <img src={iconThree} alt='Icon 3'></img>
            <p>Includes sponsorships</p>
            <p>on the experiences.</p>
            <img src={arrowThree} alt='Arrow 3'></img>
            <img src={iconFour} alt='Icon 4'></img>
            <p>Create new revenue</p>
            <p>sources.</p>
          </div>
          <div className='big-arrow'>
            <img src={bigArrow} alt='Big Arrow'></img>
          </div>
        </div>
        <div className='image-right'>
          <img src={dashboard} alt='Dashboard'></img>
        </div>
      </div>
    </div>
  </div>
);

export default TeamSports;