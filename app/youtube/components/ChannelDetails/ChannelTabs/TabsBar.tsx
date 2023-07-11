import React from 'react';

import styles from '@app/youtube/styles/channelTabs.module.css';
import Link from 'next/link';

export const TabsBar = ({
  description,
  publishedAt,
  viewCount,
}: {
  description: string;
  publishedAt: string | Date;
  viewCount: string;
}) => {
  const tabs = [
    { index: 1, tabname: 'INICIO' },
    { index: 2, tabname: 'VIDEOS' },
    { index: 3, tabname: 'SHORTS' },
    { index: 4, tabname: 'PLAYLISTS' },
    {
      index: 5,
      tabname: 'ABOUT',
      data: {
        description: description,
        publishedAt: publishedAt,
        viewCount: viewCount,
      },
    },
  ];
  return (
    <section className={styles.youtubeChannelTabs}>
      {tabs.map((tab) => (
        <Link
          key={'tab' + tab.index}
          className={styles.youtubeChannelSingleTab}
          href={`/youtube/${tab.tabname.toLowerCase()}`}
        >
          {tab.tabname}
        </Link>
      ))}
    </section>
  );
};
