import React from 'react';
import { Link } from 'react-scroll';

import './banner.styles.scss';

import { ReactComponent as Icon } from '../../assets/icon.svg';

import appleButton from '../../assets/button_apple.png';
import androidButton from '../../assets/button_android.png';

import { ParallaxBanner } from 'react-scroll-parallax';


const Banner = () => (
  <ParallaxBanner
    className='banner'
    id='banner'
    layers={[
      // {
      //   image: '/assets/banner.png',
      //   amount: 0.2,
      //   props: {
      //     style: {
      //       backgroundSize: 'cover',
      //       backgroundPosition: 'center center',
      //       backgroundRepeat: 'no-repeat'
      //     }
      //   }
      // },
      {
        image: '/assets/smartphone_banner.png',
        amount: 0.3,
        props: {
          style: {
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }
        }
      },
    ]}
    style={{
      height: '1000px',
    }}
  >
    <div className='informations'>
      <div className='icon-container'>
        <Icon className='icon' />
      </div>
      <div className='information'>
        <h1>LET YOUR SPORTS TEAM GET INSIDE YOUR FANS MOBILE</h1>
        <p>Are you feeling disconnected with your fans?</p>
        <p>Would you like to know more about them?</p>
        <p>Do you want to find new and fun ways to interact with them?</p>
        <p>Well we might have something really interesting for you!</p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {5000}
          className='interest-button'
        >
          I'M INTERESTED
        </Link>
      </div>
      <div className='app-information'>
        <div className='app-title'>
          <h1>BBOX SPORTS AR APP</h1>
          <p>Be the first to live the AR experience!</p>
        </div>
        <div className='app-buttons'>
          <a href='https://apps.apple.com/us/app/bbox-sports/id1491379643' target='_blank' rel="noopener noreferrer"><img src={appleButton} alt='IOS Button'></img></a>
          <a href='https://play.google.com/store/apps/details?id=com.ontop.bbox&hl=en_US' target='_blank' rel="noopener noreferrer" className='android-button'><img src={androidButton} alt='Android Button'></img></a>
        </div>
      </div>
      {/* </Parallax> */}
    </div>
  </ParallaxBanner>
);

export default Banner;