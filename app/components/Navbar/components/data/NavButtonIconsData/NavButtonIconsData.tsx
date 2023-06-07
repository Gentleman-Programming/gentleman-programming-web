import {
  BookIcon,
  ContactIcon,
  DiscordIcon,
  GentlemanProgrammingIcon,
  LinkedInIcon,
  ProjectIcon,
  TwitchIcon,
  YouTubeIcon,
} from '@app/components';

import { INavButtonIconDataProps } from '../../interface';

export const navButtonIconsData: INavButtonIconDataProps[] = [
  { id: '1', name: 'Twitch', icon: <TwitchIcon /> },
  { id: '2', name: 'Discord', icon: <DiscordIcon /> },
  { id: '3', name: 'YouTube', icon: <YouTubeIcon /> },
  { id: '4', name: 'LinkedIn', icon: <LinkedInIcon /> },
  { id: '5', name: 'Book', icon: <BookIcon /> },
  { id: '6', name: 'Project', icon: <ProjectIcon /> },
  { id: '7', name: 'Contact', icon: <ContactIcon /> },
  { id: '8', name: 'GentlemanProgramming', icon: <GentlemanProgrammingIcon /> },
];
