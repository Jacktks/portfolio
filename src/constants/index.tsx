enum KEY_HEADER {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PROJECTS = 'projects',
  CONTACT_ME = 'contact_me',
}

export interface HeaderMenu {
  name: String;
  key: String;
}

export const MENU_HEADER: HeaderMenu[] = [
  {
    name: 'Home',
    key: KEY_HEADER.HOME,
  },
  {
    name: 'About',
    key: KEY_HEADER.ABOUT,
  },
  {
    name: 'Services',
    key: KEY_HEADER.SERVICES,
  },
  {
    name: 'Projects',
    key: KEY_HEADER.PROJECTS,
  },
  {
    name: 'Contact me',
    key: KEY_HEADER.CONTACT_ME,
  },
];
