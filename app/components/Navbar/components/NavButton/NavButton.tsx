import styles from './navButton.module.css';
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
  GentlemanProgrammingIcon,
  BookIcon,
} from '../Icons';

export interface PropsSB {
  id?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  isLive?: boolean;
  mentions?: number;
  img?: string;
  description?: string;
  link?: string;
}
export const ServerButton = ({
  selected,
  img,
  isHome,
  hasNotifications,
  isLive,
  mentions,
  description,
  link,
}: PropsSB) => {
  const Tag = link ? 'a' : 'button';

  return (
    <Tag
      data-notifications={hasNotifications}
      data-selected={selected}
      data-isLive={isLive}
      data-hasmentions={mentions && mentions > 0}
      data-mentions={mentions}
      data-isHome={isHome}
      className={styles.button}
      href={link}
      target={link ? '_blank' : undefined}
    >
      {img == 'GP' && <GentlemanProgrammingIcon />}
      {img == 'TW' && <TwitchIcon />}
      {img == 'DS' && <DiscordIcon />}
      {img == 'YT' && <YouTubeIcon />}
      {img == 'TT' && <TwitterIcon />}
      {img == 'LK' && <LinkedInIcon />}
      {img == 'GH' && <GithubIcon />}
      {img == 'IN' && <InstagramIcon />}
      {img == 'SP' && <SpotifyIcon />}
      {img == 'TK' && <TikTokIcon />}
      {img == 'BK' && <BookIcon />}
    </Tag>
  );
};
