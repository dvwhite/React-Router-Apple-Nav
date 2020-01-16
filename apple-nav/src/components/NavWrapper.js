import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

const faIconStyle = { color: 'black' };

const NavWrapper = () => {
  return (
    <>
      <NavLink to='/'>
        <FontAwesomeIcon 
          icon={faApple} 
          style={faIconStyle} 
          />
      </NavLink>
      <NavLink exact to='/mac'>
        Mac
      </NavLink>
      <NavLink exact to='/ipad'>
        iPad
      </NavLink>
      <NavLink exact to='/iphone'>
        iPhone
      </NavLink>
      <NavLink exact to='/watch'>
        Watch
      </NavLink>
      <NavLink exact to='/tv'>
        TV
      </NavLink>
      <NavLink exact to='/music'>
        Music
      </NavLink>
      <NavLink exact to='/support'>
        Support
      </NavLink>
      <NavLink to='/us/search'>
        <FontAwesomeIcon 
          icon={faSearch} 
          style={faIconStyle} 
        />
      </NavLink>
      <NavLink to='/us/shop'>
        <FontAwesomeIcon 
          icon={faClipboard}
          style={faIconStyle} 
        />
      </NavLink>
    </>
  );
}

export default NavWrapper;
