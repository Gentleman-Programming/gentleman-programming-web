'use client';
import type { FC } from 'react';

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
export const ServerButton: FC<PropsSB> = ({
  selected,
  isHome,
  hasNotifications,
  isLive,
  mentions,
  description,
  link,
}) => {
  return (
    <button
      data-notifications={hasNotifications}
      data-selected={selected}
      data-isLive={isLive}
      data-hasMentions={mentions && mentions > 0}
      data-mentions={mentions}
      data-isHome={isHome}
      className={`${styles.button}`}
      onClick={() => {
        if (link) {
          window.open(link, '_blank');
        }
      }}
    >
      <Image src={tuti} alt={description || ''} />
    </button>
  );
};
