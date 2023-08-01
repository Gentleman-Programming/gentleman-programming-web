import React from 'react';

import data from '@app/youtube/data/Channel/GentlemanProgrammingInfo.json';
import styles from '@app/youtube/styles/youtube.module.css';

import { ChannelDetails } from '../ChannelDetails/ChannelDetails';
import { ChannelSections } from '../ChannelSections/ChannelSections';
import { TabsBar } from '../ChannelTabs/TabsBar';
import { HeaderSearchbar } from '../HeaderSearchbar/HeaderSearchbar';

const HomeYoutube = () => {
  const {
    subscriberCount,
    videoCount,
  }: { subscriberCount: string; videoCount: string } = data.statistics;
  const channelTitle = data.brandingSettings.channel.title;
  const channelBanner = data.brandingSettings.image.bannerExternalUrl;
  const channelPic = data.snippet.thumbnails;
  const channelDescription = data.snippet.description;
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
          channelPic={channelPic}
          channelDescription={channelDescription}
        />
        <TabsBar />
      </section>
      <hr
        style={{ width: '100%', marginLeft: '0 -2.5rem' }}
        className={styles.youtube__divider}
      />
      <ChannelSections />
    </main>
  );
};

export default HomeYoutube;
