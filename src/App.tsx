import {useEffect, useState} from 'react';
import './styles/variables.scss';
import './App.scss';
import {ThemeContext} from './context/theme-context';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div
        className={`App theme--${theme}`}
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
        }}
      >
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
