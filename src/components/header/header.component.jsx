import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu_icon.svg';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  
  return(
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className={`options ${mobileOpen ? "mobile-open" : ""}`}>
        <Link className='option'>FEATURES</Link>
        <Link className='option'>PROJECTS</Link>
        <Link className='option'>HOW IT WORKS</Link>
        <Link className='option'>TEAM SPORTS</Link>
        <Link className='option'>PRESS</Link>
        <Link className='option'>CONTACT US</Link>
      </div>
      <MenuIcon className='menu-icon' onClick={() => setMobileOpen(!mobileOpen)} />
    </div>
  )
}

export default Header;