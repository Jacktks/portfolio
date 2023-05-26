import {useContext} from 'react';
import {THEME} from 'types';
import './toggle.scss';
import {ThemeContext} from 'context/theme-context';

const Toggle = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const onChangeTheme = () =>
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);

  return (
    <div
      onClick={onChangeTheme}
      className={`toggle${theme === THEME.DARK ? ' night' : ''}`}
    >
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default Toggle;
