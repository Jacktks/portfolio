import facebookIcon from '../../../assets/icons/socials/facebook.svg';
import twitterIcon from '../../../assets/icons/socials/twitter.svg';
import instagramIcon from '../../../assets/icons/socials/instagram.svg';
import linkedInIcon from '../../../assets/icons/socials/linkedin.svg';

import cssIcon from '../../../assets/icons/programming/css.svg';
import htmlIcon from '../../../assets/icons/programming/html.svg';
import javascriptIcon from '../../../assets/icons/programming/javascript.svg';
import pythonIcon from '../../../assets/icons/programming/python.svg';
import reactIcon from '../../../assets/icons/programming/react.svg';
import vueIcon from '../../../assets/icons/programming/vue.svg';
import sassIcon from '../../../assets/icons/programming/sass.svg';

import {PROGRAMING_LANGUAGE, SOCIAL_NETWORK} from '../types';

export const LIST_SOCIAL_NETWORK: SOCIAL_NETWORK[] = [
  {
    icon: facebookIcon,
    name: 'facebook',
    link: 'https://twitter.com/jacktks',
  },
  {
    icon: twitterIcon,
    name: 'twitter',
    link: 'https://fb.com/jacktks.sagittarius',
  },
  {
    icon: instagramIcon,
    name: 'instagram',
    link: 'https://instagram.com/jacktks',
  },
  {
    icon: linkedInIcon,
    name: 'linkedin',
    link: 'https://instagram.com/jacktks',
  },
];

export const LIST_PROGRAMING_LANGUAGE: PROGRAMING_LANGUAGE[] = [
  {
    name: 'Javascript',
    icon: javascriptIcon,
  },
  {
    name: 'ReactJs',
    icon: reactIcon,
  },
  {
    name: 'VueJs',
    icon: vueIcon,
  },
  {
    name: 'Python',
    icon: pythonIcon,
  },
  {
    name: 'Html5',
    icon: htmlIcon,
  },
  {
    name: 'Css3',
    icon: cssIcon,
  },
  {
    name: 'Sass',
    icon: sassIcon,
  },
];
