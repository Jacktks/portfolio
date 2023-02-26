import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/theme-context';

import {MENU_HEADER} from './constants';
import {HeaderMenu} from './types';
import {THEME} from '../../types';

import './styles/header.scss';

import LightIcon from '../../assets/icons/icon-light.svg';
import DarkIcon from '../../assets/icons/icon-dark.svg';
import MobileNavDarkIcon from '../../assets/icons/icon-mobile-header-dark.svg';
import MobileNavLightIcon from '../../assets/icons/icon-mobile-header-light.svg';
import CloseIconDark from '../../assets/icons/icon-close-dark.svg';
import CloseIconLight from '../../assets/icons/icon-close-light.svg';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const appElm = document.querySelector('#App');
    appElm?.setAttribute(
      'style',
      `overflow: ${isOpenMobile ? 'hidden' : 'auto'}`,
    );
  }, [isOpenMobile]);

  const onChangeTheme = () =>
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);

  const onOpen = () => setIsOpenMobile(() => !isOpenMobile);

  return (
    <div className={`header header--${theme}`}>
      <div className="list-menu">
        {MENU_HEADER.map((item: HeaderMenu, idx) => (
          <span key={idx} className={`text--${theme}`}>
            {item.name}
          </span>
        ))}
      </div>

      <img
        className={`icon ${isOpenMobile ? 'hidden' : ''}`}
        src={theme === THEME.LIGHT ? LightIcon : DarkIcon}
        alt="light-icon"
        onClick={onChangeTheme}
      />

      <img
        className={`mobile-header-icon  ${isOpenMobile ? 'hidden' : ''}`}
        src={theme === THEME.LIGHT ? MobileNavLightIcon : MobileNavDarkIcon}
        alt="mobile-header-icon"
        onClick={onOpen}
      />

      <div
        className={`menu-mobile theme--${theme} ${isOpenMobile ? 'open' : ''}`}
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
          onClick={onOpen}
        />
      </div>
    </div>
  );
};

export default Header;
