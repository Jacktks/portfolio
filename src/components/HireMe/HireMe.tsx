import {useContext} from 'react';
import {ThemeContext} from 'context/theme-context';
import {LIST_HIRE_ME} from './constants';
import './styles/hireme.scss';

const HireMe = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className="hire-me">
        <p className={`hire-me__title text--${theme}`}>Why Hire Me</p>
        <div className="hire-me__items">
          {LIST_HIRE_ME.map((item) => (
            <div key={`${item.label}`} className="hire-me__item">
              <div className={`hire-me__img hire-me__img--${theme}`}>
                <img src={`${item.logo}`} alt={`${item.label}`} />
              </div>
              <p className={`hire-me__label text--${theme}`}>{item.label}</p>
              <p className={`hire-me__content text--${theme}`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HireMe;
