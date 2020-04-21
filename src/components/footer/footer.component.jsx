import React from 'react';

import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';


import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <div className='images'>
      <a href='https://twitter.com/bboxsports' alt='TWITTER' target='_blank' rel="noopener noreferrer" className='image'><img src={twitter} alt='TWITTER'></img></a>
      <a href='https://www.facebook.com/bboxsports' alt='FACEBOOK' target='_blank' rel="noopener noreferrer" className='image'><img src={facebook} alt='FACEBOOK'></img></a>
      <a href='https://www.instagram.com/bboxsports/' alt='INSTAGRAM' target='_blank' rel="noopener noreferrer" className='image'><img src={instagram} alt='INSTAGRAM'></img></a>
      <a href='https://www.linkedin.com/company/bboxsports' alt='LINKEDIN' target='_blank' rel="noopener noreferrer" className='image'><img src={linkedin} alt='LINKEDIN'></img></a> 
    </div>
    <p>COPYRIGHT © BBOX SPORTS 2020</p>
  </div>
);

export default Footer;