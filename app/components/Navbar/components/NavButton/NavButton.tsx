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
  ContactIcon,
  FacebookIcon,
  AppleIcon,
  AmazonIcon,
} from '../../../Icons';

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
  img,
  hasNotifications,
  isLive,
  mentions,
  description,
  link,
}: PropsSB) => {
  const Tag = link ? 'a' : 'button';
  const appDir = 'HM';
  return (
    <Tag
      data-notifications={hasNotifications}
      data-selected={description == appDir && true}
      data-isLive={isLive}
      data-hasmentions={mentions && mentions > 0}
      data-mentions={mentions}
      data-isHome={description == 'HM' && true}
      className={styles.button}
      href={link}
      target={link ? '_blank' : undefined}
    >
      {img == 'HM' && <GentlemanProgrammingIcon />}
      {img == 'TW' && <TwitchIcon />}
      {img == 'DS' && <DiscordIcon />}
      {img == 'YT' && <YouTubeIcon />}
      {img == 'TT' && <TwitterIcon />}
      {img == 'LK' && <LinkedInIcon />}
      {img == 'GH' && <GithubIcon />}
      {img == 'IN' && <InstagramIcon />}
      {img == 'FB' && <FacebookIcon />}
      {img == 'SP' && <SpotifyIcon />}
      {img == 'AP' && <AppleIcon />}
      {img == 'TK' && <TikTokIcon />}
      {img == 'BK' && <BookIcon />}
      {img == 'AM' && <AmazonIcon />}
      {img == 'CT' && <ContactIcon />}
    </Tag>
  );
};
