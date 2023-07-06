import React from 'react';

import { dataSinglePLs } from '@app/youtube/data';
import sectionData from '@app/youtube/data/Channel/channelSectionResponse.json';
import style from '@app/youtube/styles/channelLists.module.css';
import hr from '@app/youtube/styles/youtube.module.css';

import { SinglePlaylist } from '../../ChannelSections/Playlists/Playlists/YTSinglePlaylist';

export const ChannelSections = () => {
  return (
    <section className={style.youtubeChannelSectionsContainer}>
      {sectionData.items[1].snippet.position === 1 ? null : (
        <hr className={hr.youtube__divider} />
      )}
      {sectionData.items.map(
        (section) =>
          dataSinglePLs[section.snippet.position] && (
            <SinglePlaylist
              key={dataSinglePLs[section.snippet.position].index}
              section={dataSinglePLs[section.snippet.position]}
            />
          )
      )}
    </section>
  );
};
