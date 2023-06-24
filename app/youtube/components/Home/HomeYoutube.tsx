/* eslint-disable */
import React from 'react';

import data from '@app/youtube/Data/response.json';
import { IItems } from '@app/youtube/interfaces/youtube';
import styles from '@app/youtube/styles/youtube.module.css';

import { ChannelDetails } from '../ChannelDetails/ChannelDetails';
import { TabsBar } from '../ChannelTabs/TabsBar';
import { HeaderSearchbar } from '../HeaderSearchbar/HeaderSearchbar';
import { YTPlayslists } from '../Playlists/YTPlayslists';

const HomeYoutube = () => {
  const { items }: { items: IItems[] } = data;
  
  const { subscriberCount, videoCount }:{ subscriberCount:number, videoCount:number }  = items[0].statistics;
  const channelTitle = items[0].brandingSettings.channel.title;
  const channelBanner = items[0].brandingSettings.image.bannerExternalUrl;
  

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
        <TabsBar />
      </section>
      <hr className={styles.youtube__divider} />
      <YTPlayslists items={items} />
    </main>
  );
};

export default HomeYoutube;
