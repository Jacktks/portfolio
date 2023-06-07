import {KEY_HEADER} from 'components/Header/types';
import Title from 'components/Title/Title';
import {ThemeContext} from 'context/theme-context';
import {useContext} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLineChild from './components/TimeLineChild';
import {TIME_LINE} from './constants';
import './styles/works.scss';

const Works = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`works works--${theme}`} id={KEY_HEADER.WORKS}>
      <Title title="Work" />

      <VerticalTimeline animate>
        {TIME_LINE.map((item) => (
          <TimeLineChild
            {...item}
            title={item.title}
            description={item.description}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Works;
