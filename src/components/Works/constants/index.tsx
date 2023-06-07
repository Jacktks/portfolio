import {TimeLineItem} from '../types';
import {ReactComponent as Work} from 'assets/icons/work.svg';
import {ReactComponent as Education} from 'assets/icons/education.svg';

export const COLOR_VARIABLE = {
  background: '#455174',
  color: '#fff',
};

const rootContentStyle = {
  background: `${COLOR_VARIABLE.background}`,
  color: `${COLOR_VARIABLE.color}`,
  borderRadius: '12px',
  boxShadow: 'none',
};

const rootIconStyle = {
  background: `${COLOR_VARIABLE.background}`,
  color: `${COLOR_VARIABLE.color}`,
};

const rootArrowStyle = {
  borderRight: `7px solid  ${COLOR_VARIABLE.background}`,
};

export const TIME_LINE: TimeLineItem[] = [
  {
    className: 'vertical-timeline-element--work',
    date: '2012 - 2015',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Education />,
    title: 'High School',
    description: 'Sao Nam High School',
    regency: 'Student',
  },
  {
    className: 'vertical-timeline-element--work',
    date: '2015 - 2017',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Education />,
    title: 'University',
    description: 'University of Science and Education (University of Danang)',
    regency:
      'Alumnus (Bachelor of Science in Physics (International Standard Program))',
  },
  {
    className: 'vertical-timeline-element--work',
    date: '2017 - 2021',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Education />,
    title: 'University',
    description: 'University of Science and Education (University of Danang)',
    regency: 'Alumnus (Infomatics Teacher Education - GPA: 3.27 / 4.0)',
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'May 2020 - Oct 2020',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Work />,
    title: 'Work',
    description: 'Sun *',
    regency: 'Intership (Front-end)',
    url: 'https://sun-asterisk.vn/',
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'May 2021 - Apr 2022',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Work />,
    title: 'Work',
    description: 'Enable Startup Co., Ltd',
    regency: 'Front-end Developer',
    url: 'https://enablestartup.com/',
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'May 2022 - Current',
    contentArrowStyle: {...rootArrowStyle},
    contentStyle: {...rootContentStyle},
    iconStyle: {...rootIconStyle},
    icon: <Work />,
    title: 'Work',
    description: 'Paradox',
    regency: 'Software Engineer',
    url: 'https://www.paradox.ai/',
  },
];
