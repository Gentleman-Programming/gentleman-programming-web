import React from 'react';

import styles from '@app/youtube/styles/channelTabs.module.css';

const TabsBar = () => {
  return (
    <section className={styles.youtubeChannelTabs}>
      <a className={styles.youtubeChannelSingleTab} href="#">
        INICIO
      </a>
      <a className={styles.youtubeChannelSingleTab} href="#">
        VIDEOS
      </a>
      <a className={styles.youtubeChannelSingleTab} href="#">
        SHORTS
      </a>
      <a className={styles.youtubeChannelSingleTab} href="#">
        LISTAS
      </a>
      <a className={styles.youtubeChannelSingleTab} href="#">
        ABOUT
      </a>
    </section>
  );
};

export default TabsBar;
