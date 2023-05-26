import {ThemeContext} from 'context/theme-context';
import {useContext} from 'react';

import {onScrollTo} from 'utils';

import {THEME} from 'types';
import {MENU_HEADER} from './constants';
import {HeaderMenu} from './types';

import './styles/header.scss';

import MobileNavDarkIcon from 'assets/icons/icon-mobile-header-dark.svg';
import MobileNavLightIcon from 'assets/icons/icon-mobile-header-light.svg';
import Toggle from './components/Toggle';

interface Props {
  isOpenMobile: Boolean;
  onOpen: Function;
}

const Header = (props: Props) => {
  const {theme} = useContext(ThemeContext);

  const onOpen = () => props.onOpen();

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

        <Toggle />

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
