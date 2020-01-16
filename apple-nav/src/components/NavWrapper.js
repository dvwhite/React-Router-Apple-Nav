import React from 'react';
import './../App.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faIconStyle } from './../App.css';

const NavWrapper = () => {
  return (
    <div class="nav-wrapper-flex">
      <div class='nav-wrapper'>
        <NavLink to='/' className={'faAppleStyle'}>
          <FontAwesomeIcon icon={faApple} />
        </NavLink>
        <NavLink exact to='/mac' className={'nav-link'}>
          Mac
        </NavLink>
        <NavLink exact to='/ipad' className={'nav-link'}>
          iPad
        </NavLink>
        <NavLink exact to='/iphone' className={'nav-link'}>
          iPhone
        </NavLink>
        <NavLink exact to='/watch' className={'nav-link'}>
          Watch
        </NavLink>
        <NavLink exact to='/tv' className={'nav-link'}>
          TV
        </NavLink>
        <NavLink exact to='/music' className={'nav-link'}>
          Music
        </NavLink>
        <NavLink exact to='/support' className={'nav-link'}>
          Support
        </NavLink>
        <NavLink to='/us/search' className={'faIconStyle'}>
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
        <NavLink to='/us/shop' className={'faIconStyle'}>
          <FontAwesomeIcon icon={faClipboard} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavWrapper;
