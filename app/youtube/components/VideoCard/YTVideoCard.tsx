import React, { FC } from 'react';

import { IItem } from '@app/youtube/interfaces/youtube';
import styles from '@app/youtube/styles/videoCard.module.css';

type Props = {
  video: IItem;
};

export const YTVideoCard: FC<Props> = ({ video }) => {
  if (!video) {
    return null;
  } else {
    return (
      <article key={video.id?.videoId} className={styles.youtubeVideoCard}>
        <img
          src={video.snippet.thumbnails.high.url}
          alt={'Video Thumbnail' + video.id?.videoId}
          className={styles.youtubeVideoCardImage}
        />

        <section className={styles.youtubeVideoCardTexts}>
          <a className={styles.youtubeVideoCardTitle}>{video.snippet.title}</a>
          <p>666 views</p>
          <p>{video.snippet.publishedAt}</p>
        </section>
      </article>
    );
  }
};
