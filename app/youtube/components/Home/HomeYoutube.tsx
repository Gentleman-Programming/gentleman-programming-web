import React from 'react';

import data from '@app/youtube/Data/response.json';
import styles from '@app/youtube/styles/youtube.module.css';

import { ChannelDetails } from '../ChannelDetails/ChannelDetails';
import { HeaderSearchbar } from '../HeaderSearchbar/HeaderSearchbar';

const HomeYoutube = () => {
  const { items } = data;
  const {
    subscriberCount,
    videoCount,
  }: { subscriberCount: number; videoCount: number } = items[0].statistics;
  const channelTitle = items[0].brandingSettings?.channel.title;
  const channelBanner = items[0].brandingSettings?.image.bannerExternalUrl;

  return (
    <main>
      <HeaderSearchbar />
      <div
        style={{
          background: `url(${channelBanner}) center center/contain no-repeat content-box fixed`,
        }}
        className={styles.youtube__banner}
      ></div>
      <section>
        <ChannelDetails
          channelTitle={channelTitle}
          subscriberCount={subscriberCount}
          videoCount={videoCount}
        />
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
      </section>
      <section className={styles.youtubeChannelListContainer}>
        {items.map((video) => (
          <article key={video.id.videoId} className={styles.youtubeVideoCard}>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={'Video Thumbnail' + video.id.videoId}
              className={styles.youtubeVideoCardImage}
            />

            <section className={styles.youtubeVideoCardTexts}>
              <a className={styles.youtubeVideoCardTitle}>
                {video.snippet.title}
              </a>
              <p>666 views</p>
              <p>{video.snippet.publishedAt}</p>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
};
//Max.53 Chars
export default HomeYoutube;
