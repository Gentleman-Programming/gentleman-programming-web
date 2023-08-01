import React from 'react';

import { dataSinglePLs } from '@app/youtube/data';
import sectionData from '@app/youtube/data/Channel/channelSectionResponse.json';
import { SinglePlaylist } from '@app/youtube/playlists/YTSinglePlaylist';
import style from '@app/youtube/styles/channelLists.module.css';
import hr from '@app/youtube/styles/youtube.module.css';

export const ChannelSections = () => {
  return (
    <section className={style.youtubeChannelSectionsContainer}>
      {sectionData.items.map(
        (section) =>
          dataSinglePLs[section.snippet.position] && (
            <section
              key={dataSinglePLs[section.snippet.position].index}
              className={`home-section-${
                dataSinglePLs[section.snippet.position].index
              }`}
            >
              {dataSinglePLs[section.snippet.position].index === 1 ? null : (
                <hr className={hr.youtube__divider} />
              )}
              <p>{nameGiver(dataSinglePLs[section.snippet.position].index)}</p>
              <SinglePlaylist
                key={dataSinglePLs[section.snippet.position].index}
                section={dataSinglePLs[section.snippet.position]}
              />
            </section>
          )
      )}
    </section>
  );
};

function nameGiver(index: number) {
  //This is a function I made to name the sections in the HOME
  switch (index) {
    case 1:
      return 'LO MEJORCITO DEL CANAL 😱';
    case 2:
      return 'Videos';
    case 3:
      return '🆓Cursos GRATIS';
    case 4:
      return 'Shorts';
    case 5:
      return '🧑‍💻 Curso de Javascript con de tuti';
    case 6:
      return '⚛️React : desde bases hasta conceptos avanzados🚀';
    case 7:
      return '🅰Angular: de 0 a EXPERTO🚀';
    case 8:
      return '👷🏻‍♂️Clean Architecture🧼';
    case 9:
      return 'Hexagonal Architecture🍕';
    case 10:
      return '🎩 Gentleman Mentoring 🥋';
    default:
      return null;
  }
}
