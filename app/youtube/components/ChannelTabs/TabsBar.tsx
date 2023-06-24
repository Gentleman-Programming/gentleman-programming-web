import React from 'react';

import styles from '@app/youtube/styles/channelTabs.module.css';

const tabs = [
  { index: 1, tabname: 'INICIO' },
  { index: 2, tabname: 'VIDEOS' },
  { index: 3, tabname: 'SHORTS' },
  { index: 4, tabname: 'PLAYLISTS' },
  { index: 5, tabname: 'ABOUT' },
];

export const TabsBar = () => {
  return (
    <section className={styles.youtubeChannelTabs}>
      {tabs.map((tab) => (
        <a
          key={'tab' + tab.index}
          className={styles.youtubeChannelSingleTab}
          href="#"
        >
          {tab.tabname}
        </a>
      ))}
    </section>
  );
};
