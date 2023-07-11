'use client';
import React, { FC } from 'react';

import { getTimeAgo } from '@app/util/Tools/dateFormatter';
// import { f } from '@app/youtube/components/ChannelDetails/ChannelDetails';
import { IPlaylistItem } from '@app/youtube/interfaces/playlistVideoCard';
import style from '@app/youtube/styles/videoCard.module.css';

type Video = {
  video: IPlaylistItem;
};

export const YTPlaylistVideoCard: FC<Video> = ({ video }) => {
  if (video.snippet.resourceId.kind !== 'youtube#video') {
    return null;
  } else {
    return (
      <article
        key={video.snippet.resourceId.videoId}
        className={style.youtubeVideoCard}
      >
        <>
          <picture>
            <source
              media="(max-width:640px)"
              srcSet={video.snippet.thumbnails.default?.url}
            />
            <source
              media="(max-width:768px)"
              srcSet={video.snippet.thumbnails.medium?.url}
            />
            <source
              media="(max-width:1024px)"
              srcSet={video.snippet.thumbnails.high?.url}
            />
            <source
              media="(max-width:1280px)"
              srcSet={video.snippet.thumbnails.standard?.url}
            />
            <img
              className={style.youtubeVideoCardImage}
              src={video.snippet.thumbnails.medium?.url}
              alt={'Video Thumbnail' + video.snippet.resourceId.videoId}
            />
          </picture>
          <section className={style.youtubeVideoCardTexts}>
            <a className={style.youtubeVideoCardTitle}>{video.snippet.title}</a>
            <p>
              <a
                className={style.youtuberName}
                target="_blank"
                href="https://www.youtube.com/@GentlemanProgramming"
                rel="noreferrer"
              >
                Gentleman Programming
              </a>
            </p>
            <p>
              {/* {f.format(video.)} •{' '} */}
              22K views • {getTimeAgo(video.snippet.publishedAt)}
            </p>
          </section>
        </>
      </article>
    );
  }
};
