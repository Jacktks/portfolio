import {useEffect, useState} from 'react';
import {ThemeContext} from './context/theme-context';
import Home from './pages/Home';
import {THEME} from './types';
import './App.scss';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || THEME.LIGHT,
  );

  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="App" className={`App theme--${theme}`}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
