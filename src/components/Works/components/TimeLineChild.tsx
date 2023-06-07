import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import {TimeLineItem} from '../types';
import '../styles/works.scss';

const TimeLineChild = (props: TimeLineItem) => {
  return (
    <VerticalTimelineElement
      className={props.className}
      contentStyle={props.contentStyle}
      contentArrowStyle={props.contentArrowStyle}
      date={props.date}
      iconStyle={props.iconStyle}
      icon={props.icon}
      {...props}
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <p className="regency">{props.regency}</p>
      {props.url ? (
        <a
          href={`${props.url ? props.url : '#'}`}
          target="_blank"
          className="description"
          rel="noreferrer"
        >
          {props.description}
        </a>
      ) : (
        <p className="description">{props.description}</p>
      )}
    </VerticalTimelineElement>
  );
};

export default TimeLineChild;
