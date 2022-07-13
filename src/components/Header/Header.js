import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Menu } from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenu } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <div className='header'>
      <div className='header__container'>
        <Logo />
        <div className='header__menuIcon' style={{ cursor: 'pointer' }}>
          <Menu onClick={() => setHideMenu(false)} width={20} />
        </div>
        <div className={`header__sidebar ${hideMenu && 'header__hideMenu'}`}>
          <div className={`header__closeMenu `}>
            <CloseMenu onClick={() => setHideMenu(true)} />
          </div>
          <div>
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
          <div className='header__btnCont'>
            <button className='header__btn'>Login</button>
            <button className='header__btn header__btn__border'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
