import React from 'react';

import iconOne from '../../assets/icon1_team_sports.png';
import iconTwo from '../../assets/icon2_team_sports.png';
import iconThree from '../../assets/icon3_team_sports.png';
import iconFour from '../../assets/icon4_team_sports.png';
import dashboard from '../../assets/dashboard.png';
import { ReactComponent as ArrowOne } from '../../assets/arrow_1.svg';
import { ReactComponent as ArrowTwo } from '../../assets/arrow_2.svg';
import { ReactComponent as ArrowThree } from '../../assets/arrow_3.svg';
import { ReactComponent as BigArrow } from '../../assets/big_arrow.svg';


import './team-sports.styles.scss';

const TeamSports = () => (
  <div className='team-sports'>
    <div className='title'>
      <h1>WHAT'S IN IT FOR YOU AS A SPORTS TEAM?</h1>
      <p>LADS COLLECTIBLES are a fun, engaging way to be part of the Sports Team. By accessing</p>
      <p>Augmented Reality (AR) through this LADS the fans can take pictures with players, visit</p>
      <p>stadiums get custom messages and share all this with friends across social media</p>
    </div>
    <div className='images'>
      <div className='image-left'>
        <div className='stages'>
          <img src={iconOne} alt='Icon 1'></img>
          <p>Knowing the needs</p>
          <p>of your fans.</p>
          <ArrowOne />
          <img src={iconTwo} alt='Icon 2'></img>
          <p>Create fun and exciting</p>
          <p>AR content.</p>
          <ArrowTwo />
          <img src={iconThree} alt='Icon 3'></img>
          <p>Includes sponsorships</p>
          <p>on the experiences.</p>
          <ArrowThree />
          <img src={iconFour} alt='Icon 4'></img>
          <p>Create new revenue</p>
          <p>sources.</p>
        </div>
        <div className='big-arrow'>
          <BigArrow />
        </div>
      </div>
      <div className='image-right'>
        <img src={dashboard} alt='Dashboard'></img>
      </div>
    </div>
  </div>
);

export default TeamSports;