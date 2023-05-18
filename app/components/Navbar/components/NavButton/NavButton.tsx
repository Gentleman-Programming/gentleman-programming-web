import Image, { StaticImageData } from 'next/image';

import styles from './navButton.module.css';
import { GentlemanProgramming } from '../Icons';

export interface PropsSB {
  id?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  isLive?: boolean;
  mentions?: number;
  img?: StaticImageData;
  description?: string;
  link?: string;
}
export const ServerButton = ({
  selected,
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
      <GentlemanProgramming />
    </Tag>
  );
};
