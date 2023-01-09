import {useEffect, useState} from 'react';
import './styles/variables.scss';
import './App.scss';
import {ThemeContext} from './context/theme-context';
import Home from './pages/Home';
import {THEME} from './types';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || THEME.LIGHT,
  );

  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`App theme--${theme}`}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
