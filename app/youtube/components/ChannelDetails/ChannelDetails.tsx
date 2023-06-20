import React from 'react';

import styles from '@app/youtube/styles/channelDetails.module.css';

const f = new Intl.NumberFormat('en-GB', {
  notation: 'compact',
  compactDisplay: 'short',
});

export const ChannelDetails = ({
  channelTitle,
  subscriberCount,
  videoCount,
}: {
  channelTitle: string;
  subscriberCount: number;
  videoCount: number;
}) => {
  const channelPic =
    'https://yt3.googleusercontent.com/RerL_HygEZuzI-VMS6GRtuSneViN7j6fjCYIGPNqzoLGlbBd0C4GKqBu3g7hJWiEJskeoYBc=s176-c-k-c0x00ffffff-no-rj';
  return (
    <section className={styles.youtubeChannelDetails}>
      <img
        className={styles.youtubeChannelPic}
        draggable="false"
        alt="GentlemanProgramming Channel Pic"
        width="128"
        src={channelPic}
      />
      <section className={styles.youtubeChannelDetailsTexts}>
        <h1 className={styles.youtubeChannelDetailsTitle}>{channelTitle}</h1>
        <h4
          className={styles.youtubeSecondaryText}
          style={{
            fontSize: '1rem',
            lineHeight: '1.6rem',
            fontWeight: 500,
          }}
        >
          @GentlemanProgramming
          <span className={styles.youtubeSecondaryText}>{` ${f.format(
            subscriberCount
          )} subscribers ${f.format(videoCount)} videos`}</span>
        </h4>
        <p className={styles.youtubeSecondaryText}>
          Hola gente !! Cómo andamos ?
        </p>
      </section>
    </section>
  );
};
