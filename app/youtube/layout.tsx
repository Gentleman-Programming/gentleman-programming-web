import React, { ReactNode } from 'react';

import { TutiFooterFinal, TutiTop } from '@app/common';
import { NavBar } from '@app/components';
import data from '@app/youtube/data/Channel/GentlemanProgrammingInfo.json';
import styles from '@app/youtube/styles/youtube.module.css';

import { ChannelDetails, TabsBar } from './components';
import { HeaderSearchbar } from './components/HeaderSearchbar/HeaderSearchbar';
import { IChannelAbout } from './interfaces/channelAbout';

export const dataAbout: IChannelAbout = {
  publishedAt: data.snippet.publishedAt,
  viewCount: data.statistics.viewCount,
  description: data.snippet.description,
};

export default function YoutubeLayout({ children }: { children: ReactNode }) {
  const {
    subscriberCount,
    videoCount,
    viewCount,
  }: { subscriberCount: string; videoCount: string; viewCount: string } =
    data.statistics;
  const channelTitle = data.brandingSettings.channel.title;
  const channelBanner = data.brandingSettings.image.bannerExternalUrl;
  const channelPic = data.snippet.thumbnails;
  const channelDescription: string = data.snippet.description;
  const channelPublishedAt: string | Date = data.snippet.publishedAt;
  return (
    <div className={styles.youtube__theme}>
      {/* Renders the navigation bar */}
      <NavBar />
      <main className={styles.youtube__container}>
        <HeaderSearchbar />
        <div
          style={{
            background: `url(${channelBanner}) center center/contain no-repeat content-box fixed`,
          }}
          className={styles.youtube__banner}
        ></div>
        <section className={styles.youtubeMainContent}>
          <ChannelDetails
            channelTitle={channelTitle}
            subscriberCount={subscriberCount}
            videoCount={videoCount}
            channelPic={channelPic}
            channelDescription={channelDescription}
          />
          <TabsBar
            description={channelDescription}
            publishedAt={channelPublishedAt}
            viewCount={viewCount}
          />

          <hr style={{ width: '100%' }} className={styles.youtube__divider} />
          {children}
        </section>
      </main>
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
