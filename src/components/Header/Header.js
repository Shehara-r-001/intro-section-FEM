import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Menu } from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenu } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='header'>
      <div className='header__container'>
        <Logo />
        <Menu width={20} />
        <div
          className='header__sidebar'
          // style={{ transform: 'translateX(100%)' }}
        >
          <div className='header__closeMenu'>
            <CloseMenu />
          </div>
          <ul>
            <li>
              Features
              <span className='sidebar__linkSpan'>
                <ArrowDown />
              </span>
            </li>
            <li>
              Company
              <span className='sidebar__linkSpan'>
                <ArrowDown />
              </span>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
