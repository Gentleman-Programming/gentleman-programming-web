import { INavButtonDataProps } from '../../interface';

export const NavButtonsData: INavButtonDataProps[] = [
  { id: '1', description: '', toolTip: 'Home', link: '/', img: 'Home' },
  {
    id: '2',
    description: 'twitch',
    toolTip: 'Twitch',
    link: '/twitch',
    isLive: true,
    img: 'Twitch',
  },
  {
    id: '3',
    description: 'discord',
    toolTip: 'Discord',
    link: '/discord',
    img: 'Discord',
  },
  {
    id: '4',
    description: 'youtube',
    toolTip: 'YouTube',
    link: '/youtube',
    img: 'YouTube',
    mentions: 3,
  },
  {
    id: '5',
    description: 'linkedin',
    toolTip: 'LinkedIn',
    link: '/linkedin',
    img: 'LinkedIn',
  },
  {
    id: '6',
    description: 'book',
    toolTip: 'Book',
    link: 'https://gentleman-programming-book.vercel.app/es',
    img: 'Book',
  },
  {
    id: '7',
    description: 'project',
    toolTip: 'Project',
    link: '/project',
    img: 'Project',
  },
  {
    id: '8',
    description: 'contact',
    toolTip: 'Contact',
    link: '/contact',
    img: 'Contact',
  },
];
