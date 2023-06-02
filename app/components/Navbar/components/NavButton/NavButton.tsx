import { FC } from 'react';

import {
  BookIcon,
  ContactIcon,
  DiscordIcon,
  GentlemanProgrammingIcon,
  LinkedInIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@app/components';

import styles from './styles/navButton.module.css';

interface PropsNB {
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
export const NavButton: FC = ({
  img,
  hasNotifications,
  isLive,
  mentions,
  description,
  link,
}: PropsNB) => {
  const Tag = link ? 'a' : 'button';
  const appDir = 'DS';
  return (
    <Tag
      dataNotifications={hasNotifications}
      dataSelected={description == appDir && true}
      dataIsLive={isLive}
      dataHasmentions={mentions && mentions > 0}
      dataMentions={mentions}
      dataIsHome={description == 'HM' && true}
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
      {img == 'BK' && <BookIcon />}
      {img == 'CT' && <ContactIcon />}
    </Tag>
  );
};
