import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/icon_list_mobile.svg';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [classActive, setClassActive] = useState(false);

  return(
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className={`options ${mobileOpen ? "mobile-open" : ""}`}>
        <Link
          activeClass="active"
          to="banner"
          spy={true}
          smooth={true}
          offset={0}
          duration= {2000}
          className={`option ${classActive ? "active" : ""}`}
          onClick={() => setClassActive(classActive)}
        >
          FEATURES
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration= {1000}
          className='option'
        >
          PROJECTS
        </Link>
        <Link
          activeClass="active"
          to="how-it-works"
          spy={true}
          smooth={true}
          offset={0}
          duration= {2000}
          className='option'
        >
          HOW IT WORKS
        </Link>
        <Link
          activeClass="active"
          to="team-sports"
          spy={true}
          smooth={true}
          offset={0}
          duration= {3000}
          className='option'
        >
          TEAM SPORTS
        </Link>
        <Link
          activeClass="active"
          to="press"
          spy={true}
          smooth={true}
          offset={-130}
          duration= {4000}
          className='option'
        >
          PRESS
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration= {5000}
          className='option contact'
        >
          CONTACT US
        </Link>
        {/* <a href='#banner' className='option feature'>FEATURES</a>
        <a href='#projects' className='option'>PROJECTS</a>
        <a href='#how-it-works' className='option'>HOW IT WORKS</a>
        <a href='#team-sports' className='option'>TEAM SPORTS</a>
        <a href='#press' className='option'>PRESS</a>
        <a href='#contact' className='option contact'>CONTACT US</a> */}
      </div>
      <MenuIcon className='menu-icon' onClick={() => setMobileOpen(!mobileOpen)} />
    </div>
  )
}

export default Header;