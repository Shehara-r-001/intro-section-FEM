import React, { useCallback, useEffect, useState } from 'react';
import mobile_bg from '../../images/image-hero-mobile.png';
import desktop_bg from '../../images/image-hero-desktop.png';
import './Home.css';
import client_meet from '../../images/client-meet.svg';
import client_audiophile from '../../images/client-audiophile.svg';
import client_databiz from '../../images/client-databiz.svg';
import client_maker from '../../images/client-maker.svg';

const Home = () => {
  const [windowSize, setWindowSize] = useState(true);

  const handleWindowResize = useCallback((event) => {
    if (window.innerWidth < 768) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className='home'>
      <div className='home__div home__div-margin'>
        {windowSize ? (
          <img className='home__hero-mobile' src={desktop_bg} alt='' />
        ) : (
          <img
            className='home__hero-mobile'
            src={mobile_bg}
            alt='hero-mobile'
          />
        )}
      </div>
      <div className='home__div home__details-desktop'>
        <h1 className='home__title'>Make remote work</h1>
        <p className='home__description'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button className='home__button'>Learn more</button>
        </div>
        <div className='home__bottomCont'>
          <img
            className='home__providers'
            src={client_databiz}
            alt='client_meet'
          />
          <img
            className='home__providers home__audiophile'
            src={client_audiophile}
            alt='client_meet'
          />
          <img
            className='home__providers'
            src={client_meet}
            alt='client_meet'
          />
          <img
            className='home__providers'
            src={client_maker}
            alt='client_meet'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
