import {useContext, useState, useEffect} from 'react';
import Slider from 'react-slick';

import {ThemeContext} from '../../context/theme-context';

import {LIST_PROGRAMING_LANGUAGE, LIST_SOCIAL_NETWORK} from './constants';
import YoungManImage from '../../assets/icons/young-man-image.svg';

import Tab from '../Tab/Tab';
import './styles/about.scss';
import {useWindowSize} from '../../hooks/useWindowSize';

const About = () => {
  const {theme} = useContext(ThemeContext);

  const {width} = useWindowSize();

  const [settingsSlider, setSettingsSlider] = useState<any>({
    accessibility: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: false,
    centerPadding: '10px',
    slidesToShow: 1,
    autoplay: true,
  });

  useEffect(
    () => handleSettingsSlide(width || 0),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [width],
  );

  const handleSettingsSlide = (widthElm: number) => {
    if (!widthElm) return;

    if (widthElm >= 1500) {
      setSettingsSlider({
        ...settingsSlider,
        centerPadding: '45px',
        slidesToShow: 6,
      });
    } else if (widthElm < 1500 && widthElm >= 1000) {
      setSettingsSlider({
        ...settingsSlider,
        centerPadding: '45px',
        slidesToShow: 4,
      });
    } else if (widthElm < 1000 && widthElm >= 750) {
      setSettingsSlider({
        ...settingsSlider,
        centerPadding: '45px',
        slidesToShow: 3,
      });
    } else if (widthElm < 750 && widthElm > 450) {
      setSettingsSlider({
        ...settingsSlider,
        centerPadding: '45px',
        slidesToShow: 2,
      });
    } else if (widthElm < 450) {
      setSettingsSlider({
        ...settingsSlider,
        centerPadding: '0px',
        slidesToShow: 1,
      });
    }
  };

  return (
    <div className="about">
      <div className="info">
        <div className="infoLeft">
          <span className={`info text--${theme}`}>Hi, I am Tri</span>
          <span className="position">Frontend Developer</span>
          <button type="button">
            <a href="hello" target="_blank">
              Download CV
            </a>
          </button>

          <div className="list-social">
            {LIST_SOCIAL_NETWORK.map((item, idx) => (
              <a
                key={idx}
                style={{
                  marginRight:
                    LIST_SOCIAL_NETWORK.length !== idx + 1 ? '33px' : 0,
                }}
                href={`${item.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <img key={idx} src={`${item.icon}`} alt={`${item.name}`}></img>
              </a>
            ))}
          </div>
        </div>

        <div className="infoRight">
          <img src={YoungManImage} alt="me" />
        </div>
      </div>

      <div className="programing-language">
        <Slider {...settingsSlider}>
          {LIST_PROGRAMING_LANGUAGE.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginLeft: idx > 0 ? '12px' : 0,
                marginTop: '60px',
              }}
            >
              <Tab name={item.name} image={item.icon} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
