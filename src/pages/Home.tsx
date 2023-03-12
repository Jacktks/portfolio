import About from '../components/About/About';
import Header from '../components/Header/Header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useContext, useState} from 'react';
import {MENU_HEADER} from '../components/Header/constants';
import {HeaderMenu} from '../components/Header/types';
import {ThemeContext} from '../context/theme-context';
import {THEME} from '../types';
import CloseIconDark from '../assets/icons/icon-close-dark.svg';
import CloseIconLight from '../assets/icons/icon-close-light.svg';

import './home.scss';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const onOpenHeaderMobile = () => setIsOpenMobile(() => !isOpenMobile);

  return (
    <div className="home-page">
      <div className={`${isOpenMobile ? `show` : ''}`}>
        <Header isOpenMobile={isOpenMobile} onOpen={onOpenHeaderMobile} />
        <About />
      </div>
      <div
        className={`home-page__menu theme--${theme} ${
          isOpenMobile ? 'show' : ''
        }`}
      >
        {MENU_HEADER.map((item: HeaderMenu, idx) => (
          <span key={idx} className={`text--${theme}`}>
            {item.name}
          </span>
        ))}
        <img
          src={theme === THEME.LIGHT ? CloseIconLight : CloseIconDark}
          className="icon-close"
          alt="icon-close"
          onClick={onOpenHeaderMobile}
        />
      </div>
    </div>
  );
};

export default Home;
