import {useContext} from 'react';
import {ThemeContext} from '../context/theme-context';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const onChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="header">
      <div className="header-content">
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <button
              type="button"
              className={`toggle-btn__input-label`}
              onClick={onChangeTheme}
            >
              Hello
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
