import React from 'react';
import './../App.scss';
import { NavLink } from 'react-router-dom';

const NavWrapper = () => {
  return (
    <div className="nav-wrapper-flex">
      <div className='nav-wrapper'>
        <NavLink to='/' className='nav-svg'>
          <img src={require('./../images/navicons/apple.svg')} alt="Apple"/>
        </NavLink>
        <NavLink exact to='/mac' className={'nav-link'} activeClassName={'active-nav-link'}>
          Mac
        </NavLink>
        <NavLink exact to='/ipad' className={'nav-link'} activeClassName={'active-nav-link'}>
          iPad
        </NavLink>
        <NavLink exact to='/iphone' className={'nav-link'} activeClassName={'active-nav-link'}>
          iPhone
        </NavLink>
        <NavLink exact to='/watch' className={'nav-link'} activeClassName={'active-nav-link'}>
          Watch
        </NavLink>
        <NavLink exact to='/tv' className={'nav-link'} activeClassName={'active-nav-link'}>
          TV
        </NavLink>
        <NavLink exact to='/music' className={'nav-link'} activeClassName={'active-nav-link'}>
          Music
        </NavLink>
        <NavLink exact to='/support' className={'nav-link'} activeClassName={'active-nav-link'}>
          Support
        </NavLink>
        <NavLink to='/us/search' className={'nav-svg'}>
          <img src={require('./../images/navicons/search_light.svg')} alt="Shopping bag"/>
        </NavLink>
        <NavLink to='/us/shop' className={'nav-svg'}>
          <img src={require('./../images/navicons/bag_light.svg')} alt="Shopping bag"/>
        </NavLink>
      </div>
    </div>
  );
};

export default NavWrapper;
