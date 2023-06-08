import {
  BookIcon,
  ContactIcon,
  DiscordIcon,
  GentlemanProgrammingIcon,
  INavButtonIconDataProps,
  LinkedInIcon,
  ProjectIcon,
  TwitchIcon,
  YouTubeIcon,
} from '@app/components';

export const navButtonIconsData: INavButtonIconDataProps[] = [
  { id: '1', name: 'Twitch', icon: <TwitchIcon /> },
  { id: '2', name: 'Discord', icon: <DiscordIcon /> },
  { id: '3', name: 'YouTube', icon: <YouTubeIcon /> },
  { id: '4', name: 'LinkedIn', icon: <LinkedInIcon /> },
  { id: '5', name: 'Book', icon: <BookIcon /> },
  { id: '6', name: 'Project', icon: <ProjectIcon /> },
  { id: '7', name: 'Contact', icon: <ContactIcon /> },
  { id: '8', name: 'Home', icon: <GentlemanProgrammingIcon /> },
];
export const TutiNavButtonIcon = (img: string) => {
  const icon =
    navButtonIconsData.find((item) => item.name === img)?.icon ?? null;
  return icon;
};
