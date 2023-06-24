import React, { FC } from 'react';

import { IItem, IItems } from '@app/youtube/interfaces/youtube';
import styles from '@app/youtube/styles/channelLists.module.css';

import { YTVideoCard } from '../VideoCard/YTVideoCard';

type Props = {
  items: IItems;
};

export const YTPlayslists: FC<Props> = ({ items }) => {
  return (
    <section className={styles.youtubeChannelListContainer}>
      {items.map((video: IItem) => (
        <YTVideoCard key={video.id?.videoId} video={video} />
      ))}
    </section>
  );
};
