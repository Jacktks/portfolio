import {ThemeContext} from 'context/theme-context';
import {useContext} from 'react';

import {onScrollTo} from 'utils';

import {THEME} from 'types';
import {MENU_HEADER} from './constants';
import {HeaderMenu} from './types';

import './styles/header.scss';

import DarkIcon from 'assets/icons/icon-dark.svg';
import LightIcon from 'assets/icons/icon-light.svg';
import MobileNavDarkIcon from 'assets/icons/icon-mobile-header-dark.svg';
import MobileNavLightIcon from 'assets/icons/icon-mobile-header-light.svg';

interface Props {
  isOpenMobile: Boolean;
  onOpen: Function;
}

const Header = (props: Props) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const onOpen = () => props.onOpen();

  const onChangeTheme = () =>
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);

  const onScrollToTab = (tab: String) => onScrollTo(tab);

  return (
    <>
      <div className={`header header--${theme}`}>
        <div className="header__menu">
          {MENU_HEADER.map((item: HeaderMenu, idx) => (
            <span
              key={idx}
              className={`text--${theme}`}
              onClick={() => onScrollToTab(item.key)}
            >
              {item.name}
            </span>
          ))}
        </div>

        <img
          className={`header__icDesktop ${props.isOpenMobile ? 'hidden' : ''}`}
          src={theme === THEME.LIGHT ? LightIcon : DarkIcon}
          alt="light-icon"
          onClick={onChangeTheme}
        />

        <img
          className={`header__icMobile  ${props.isOpenMobile ? 'hidden' : ''}`}
          src={theme === THEME.LIGHT ? MobileNavLightIcon : MobileNavDarkIcon}
          alt="mobile-header-icon"
          onClick={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
