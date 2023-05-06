import tuti from '@page/assets/TutiPink.webp';
import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.css';
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
  const a = 5;

  return (
    <Tag
      data-notifications={hasNotifications}
      data-selected={selected}
      data-isLive={isLive}
      data-hasMentions={mentions && mentions > 0}
      data-mentions={mentions}
      data-isHome={isHome}
      className={styles.button}
      href={link}
      target={link ? '_blank' : undefined}
    >
      <Image src={tuti} alt={description || ''} />
    </Tag>
  );
};
