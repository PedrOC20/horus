import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Logo className='logo' />
    </div>
    <div className='options'>
      <Link className='option'>FEATURES</Link>
      <Link className='option'>PROJECTS</Link>
      <Link className='option'>HOW IT WORKS</Link>
      <Link className='option'>TEAM SPORTS</Link>
      <Link className='option'>PRESS</Link>
      <Link className='option'>CONTACT US</Link>
    </div>
  </div>
)

export default Header;