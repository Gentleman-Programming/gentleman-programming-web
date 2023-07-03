import React from 'react';

import sectionData from '@app/youtube/data/Channel/channelSectionResponse.json';
import section1 from '@app/youtube/data/SinglePlaylists/section 1.json';
import style from '@app/youtube/styles/channelLists.module.css';
import hr from '@app/youtube/styles/youtube.module.css';

import { YTPlaylistVideoCard } from '../VideoCard/YTPlaylistVideoCard';

const YTPlaylistURL = 'https://www.youtube.com/playlist?list=';
const bestFromChan = section1.items.slice(0, 12);
export const ChannelSections = () => {
  return (
    <section className={style.youtubeChannelSectionsContainer}>
      {sectionData.items[1].snippet.position === 1 ? null : (
        <hr className={hr.youtube__divider} />
      )}
      {sectionData.items.map(
        (section) =>
          section.snippet.type === 'singleplaylist' && (
            <SinglePlaylist key={section.etag} section={section} />
          )
      )}
    </section>
  );
};
export const SinglePlaylist = ({ section }: { section: any }) => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={`${YTPlaylistURL}${section.contentDetails?.playlists}`}
        className={style.youtubePlaylistName}
      >
        {section.snippet.position === 1
          ? '😱 LO MEJORCITO  DEL CANAL 😱'
          : section.snippet?.title}
      </a>
      <section key={section.etag} className={style.youtubeChannelListContainer}>
        {section.snippet.position === 1 &&
          bestFromChan.map((video) => (
            <YTPlaylistVideoCard key={video.etag} video={video} />
          ))}
      </section>
    </>
  );
};
