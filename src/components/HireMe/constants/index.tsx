import Communicate from 'assets/icons/hire/communicate.svg';
import Favorite from 'assets/icons/hire/favorite.svg';
import Professional from 'assets/icons/hire/professional.svg';
import Collaborative from 'assets/icons/hire/collaborative.svg';

import {HireMe} from '../types';

export const LIST_HIRE_ME: HireMe[] = [
  {
    logo: Communicate,
    label: 'Communicative',
    content:
      'I engage in effective communication with both customers and project team members to collaboratively develop an optimal product system.',
  },
  {
    logo: Professional,
    label: 'Professional',
    content:
      'Striving for professionalism is the cornerstone of delivering the best products, and it remains my guiding principle.',
  },
  {
    logo: Collaborative,
    label: 'Collaborative',
    content:
      'I actively collaborate and synergize with all team members in the company to create exceptional projects, ensuring utmost customer satisfaction. ',
  },
  {
    logo: Favorite,
    label: `Client's Favorite`,
    content:
      'By means of my working methods and the high-quality products I produce, I strive to elicit customer delight and satisfaction.',
  },
];
