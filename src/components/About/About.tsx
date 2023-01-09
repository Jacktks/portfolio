import {useContext} from 'react';
import {ThemeContext} from '../../context/theme-context';
import './styles/about.scss';
import YoungManImage from '../../assets/icons/young-man-image.svg';
import {LIST_PROGRAMING_LANGUAGE, LIST_SOCIAL_NETWORK} from './constants';
import Language from './components/language';

const About = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="about">
      <div className="info">
        <div className="infoLeft">
          <span className={`info text--${theme}`}>Hi, I am</span>
          <span className={`info text--${theme}`}>Nguyen Van Tri</span>
          <span className="position">Frontend Developer</span>
          <button type="button">
            <a href="hello" target="_blank">
              Download CV
            </a>
          </button>

          <div className="list-social">
            {LIST_SOCIAL_NETWORK.map((item, idx) => (
              <a href={`${item.link}`} target="_blank" rel="noreferrer">
                <img key={idx} src={`${item.icon}`} alt={`${item.name}`}></img>
              </a>
            ))}
          </div>
        </div>

        <div className="infoRight">
          <img src={YoungManImage} alt="me" />
        </div>
      </div>

      {/* <div className="programing-language">
        {LIST_PROGRAMING_LANGUAGE.map((item) => (
          <Language name={item.name} image={item.icon} />
        ))}
      </div> */}
    </div>
  );
};

export default About;
