import {useContext} from 'react';
import {ThemeContext} from '../../context/theme-context';

import {MENU_HEADER} from './constants';
import {HeaderMenu} from './types';
import {THEME} from '../../types';

import './styles/header.scss';

import LightIcon from '../../assets/icons/icon-light.svg';
import DarkIcon from '../../assets/icons/icon-dark.svg';
import MobileNavDarkIcon from '../../assets/icons/icon-mobile-header-dark.svg';
import MobileNavLightIcon from '../../assets/icons/icon-mobile-header-light.svg';

interface Props {
  isOpenMobile: Boolean;
  onOpen: Function;
}

const Header = (props: Props) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const onOpen = () => props.onOpen();

  const onChangeTheme = () =>
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);

  return (
    <>
      <div className={`header header--${theme}`}>
        <div className="header__menu">
          {MENU_HEADER.map((item: HeaderMenu, idx) => (
            <span key={idx} className={`text--${theme}`}>
              {item.name}
            </span>
          ))}
        </div>

        <img
          className={`header__icon ${props.isOpenMobile ? 'hidden' : ''}`}
          src={theme === THEME.LIGHT ? LightIcon : DarkIcon}
          alt="light-icon"
          onClick={onChangeTheme}
        />

        <img
          className={`header__icon-mobile  ${
            props.isOpenMobile ? 'hidden' : ''
          }`}
          src={theme === THEME.LIGHT ? MobileNavLightIcon : MobileNavDarkIcon}
          alt="mobile-header-icon"
          onClick={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
