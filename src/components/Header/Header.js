import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Menu } from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenu } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../images/icon-arrow-up.svg';
import FeatureDrop from './FeatureDrop';
import CompanyDrop from './CompanyDrop';

const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const [hideFeatures, setHideFeatures] = useState(true);
  const [hideCompany, setHideCompany] = useState(true);
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
              <li className='header__links__underline'>
                <div>
                  Features
                  <span className='sidebar__linkSpan'>
                    {hideFeatures ? (
                      <ArrowDown
                        onClick={() => setHideFeatures(!hideFeatures)}
                      />
                    ) : (
                      <ArrowUp onClick={() => setHideFeatures(!hideFeatures)} />
                    )}
                  </span>
                </div>
                <div
                  className={`header__featureDrop ${
                    hideFeatures && 'header__display-none'
                  }`}
                >
                  <FeatureDrop />
                </div>
              </li>
              <li className='header__links__underline'>
                <div>
                  Company
                  <span className='sidebar__linkSpan'>
                    {hideCompany ? (
                      <ArrowDown onClick={() => setHideCompany(!hideCompany)} />
                    ) : (
                      <ArrowUp onClick={() => setHideCompany(!hideCompany)} />
                    )}
                  </span>
                </div>
                <div
                  className={`header__featureDrop ${
                    hideCompany && 'header__display-none'
                  }`}
                >
                  <CompanyDrop />
                </div>
              </li>
              <li className='header__links__underline'>Careers</li>
              <li className='header__links__underline'>About</li>
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
