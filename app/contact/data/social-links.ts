interface SocialLink {
  name: string;
  link: string;
  icon: IconType;
  socialClass: string;
}

export enum IconType {
  InstagramIcon = 'InstagramIcon',
  GithubIcon = 'GithubIcon',
  TiktokIcon = 'TiktokIcon',
  DiscordIcon = 'DiscordIcon',
  TwitterIcon = 'TwitterIcon',
  SpotifyIcon = 'SpotifyIcon',
  LinkedinIcon = 'LinkedinIcon',
  YoutubeIcon = 'YoutubeIcon',
  TwitchIcon = 'TwitchIcon',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'instagram',
    link: '',
    icon: IconType.InstagramIcon,
    socialClass: 'instagram',
  },
  {
    name: 'github',
    link: '',
    icon: IconType.GithubIcon,
    socialClass: 'github',
  },
  {
    name: 'tiktok',
    link: '',
    icon: IconType.TiktokIcon,
    socialClass: 'tiktok',
  },
  {
    name: 'discord',
    link: '',
    icon: IconType.DiscordIcon,
    socialClass: 'discord',
  },
  {
    name: 'twitter',
    link: '',
    icon: IconType.TwitterIcon,
    socialClass: 'twitter',
  },
  {
    name: 'spotify',
    link: '',
    icon: IconType.SpotifyIcon,
    socialClass: 'spotify',
  },
  {
    name: 'linkedin',
    link: '',
    icon: IconType.LinkedinIcon,
    socialClass: 'linkedin',
  },
  {
    name: 'youtube',
    link: '',
    icon: IconType.YoutubeIcon,
    socialClass: 'youtube',
  },
  {
    name: 'twitch',
    link: '',
    icon: IconType.TwitchIcon,
    socialClass: 'twitch',
  },
];
