import React, { useState } from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/icon_list_mobile.svg';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  
  return(
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className={`options ${mobileOpen ? "mobile-open" : ""}`}>
        <a href='#banner' className='option feature'>FEATURES</a>
        <a href='#projects' className='option'>PROJECTS</a>
        <a href='#how-it-works' className='option'>HOW IT WORKS</a>
        <a href='#team-sports' className='option'>TEAM SPORTS</a>
        <a href='#press' className='option'>PRESS</a>
        <a href='#contact' className='option contact'>CONTACT US</a>
      </div>
      <MenuIcon className='menu-icon' onClick={() => setMobileOpen(!mobileOpen)} />
    </div>
  )
}

export default Header;