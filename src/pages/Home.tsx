import {useContext, useState} from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {onScrollTo} from 'utils';
import {waitFor} from 'utils/async';
import {THEME} from 'types';

import CloseIconDark from 'assets/icons/icon-close-dark.svg';
import CloseIconLight from 'assets/icons/icon-close-light.svg';
import {MENU_HEADER} from 'components/Header/constants';
import {HeaderMenu} from 'components/Header/types';
import {ThemeContext} from 'context/theme-context';

import About from 'components/About/About';
import Header from 'components/Header/Header';
import HireMe from 'components/HireMe/HireMe';

import './home.scss';
import Works from 'components/Works/Works';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [positionScroll, setPositionScroll] = useState(0);

  const onOpenHeaderMobile = async () => {
    if (isOpenMobile) {
      setIsOpenMobile(() => !isOpenMobile);
      await waitFor(100);
      window.scrollTo({
        top: positionScroll,
      });
    } else {
      const scrollPosition = window.scrollY;
      setPositionScroll(scrollPosition);
      setIsOpenMobile(() => !isOpenMobile);
    }
  };

  const onScrollToTab = async (tab: String) => {
    onOpenHeaderMobile();
    await waitFor(700);
    onScrollTo(tab);
  };

  return (
    <div className="home-page">
      <div className={`${isOpenMobile ? `show` : ''}`}>
        <Header isOpenMobile={isOpenMobile} onOpen={onOpenHeaderMobile} />
        <About />
        <Works />
        <HireMe />
      </div>
      <div
        className={`home-page__menu theme--${theme} ${
          isOpenMobile ? 'show' : ''
        }`}
      >
        {MENU_HEADER.map((item: HeaderMenu, idx) => (
          <span
            key={idx}
            className={`text--${theme}`}
            onClick={() => onScrollToTab(item.key)}
          >
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
