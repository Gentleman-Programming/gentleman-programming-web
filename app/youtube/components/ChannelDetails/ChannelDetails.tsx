import React, { FC } from 'react';

import { IChannelDetails } from '@app/youtube/interfaces/channelDetails';
import styles from '@app/youtube/styles/channelDetails.module.css';

export const f = new Intl.NumberFormat('en-GB', {
  notation: 'compact',
  compactDisplay: 'short',
});

export const ChannelDetails: FC<IChannelDetails> = ({
  channelTitle,
  subscriberCount,
  videoCount,
  channelPic,
  channelDescription,
}) => {
  const channelDetailSpan = ` ${f.format(
    parseInt(subscriberCount)
  )} subscribers ${f.format(parseInt(videoCount))} videos`;
  return (
    <section className={styles.youtubeChannelDetails}>
      <picture>
        <source
          type="image/jpeg"
          media="(max-width:640px)"
          srcSet={channelPic.default.url}
        />
        <source
          type="image/jpeg"
          media="(max-width:768px)"
          srcSet={channelPic.medium.url}
        />
        <img
          draggable="false"
          alt="GentlemanProgramming Channel Pic"
          width="128"
          src={channelPic.high.url}
          className={styles.youtubeChannelPic}
        />
      </picture>
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
          <span className={styles.youtubeSecondaryText}>
            {channelDetailSpan}
          </span>
        </h4>
        <p className={styles.youtubeSecondaryText}>
          {channelDescription.slice(0, 31)}
        </p>
      </section>
    </section>
  );
};
