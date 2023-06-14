import React from 'react';

import { SearchIcon } from './SearchIcon';
import data from '../../Data/response.json';
import styles from '../../styles/youtube.module.css';

const HomeYoutube = () => {
  const { items } = data;
  const channelTitle = items[0].brandingSettings?.channel.title;
  const channelBanner = items[0].brandingSettings?.image.bannerExternalUrl;
  return (
    <main>
      <header className={styles.youtube__searchbarSection}>
        <input
          id="YTsearch"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          className={styles.youtubeInputSearch}
          tabIndex={0}
          type="text"
          spellCheck="false"
          placeholder="Buscar"
          aria-label="Buscar"
          role="combobox"
          aria-haspopup="false"
          aria-autocomplete="list"
          dir="ltr"
        />
        <button className={styles.youtubeInputButton} type="submit">
          <SearchIcon />
        </button>
        {/* call the "chrome.identity.getProfileUserInfo" function to retrieve the user's basic profile information. Note that the will need to grant your extension permission to access their profile information. To request this permission, you can call the "chrome.identity.getAuthToken" function, which will prompt the user to sign in to their Google account and grant your extension access to their basic profile information.  */}
        {/* <img src="user_avatar.png" alt="User Avatar"/> */}
      </header>
      <div
        style={{
          background: `url(${channelBanner}) center center/contain no-repeat content-box fixed`,
        }}
        className={styles.youtube__banner}
      ></div>
      <section>
        <section className={styles.youtubeChannelDetails}>
          <img
            className={styles.youtubeChannelPic}
            draggable="false"
            alt="GentlemanProgramming Channel Pic"
            width="128"
            src={
              'https://yt3.googleusercontent.com/RerL_HygEZuzI-VMS6GRtuSneViN7j6fjCYIGPNqzoLGlbBd0C4GKqBu3g7hJWiEJskeoYBc=s176-c-k-c0x00ffffff-no-rj'
            }
          />
          <section className={styles.youtubeChannelDetailsTexts}>
            <h1 className={styles.youtubeChannelDetailsTitle}>
              {channelTitle}
            </h1>
            <h4
              className={styles.youtubeSecondaryText}
              style={{
                fontSize: '1rem',
                lineHeight: '1.6rem',
                fontWeight: 500,
              }}
            >
              @GentlemanProgramming
            </h4>
            <p className={styles.youtubeSecondaryText}>
              Hola gente !! Cómo andamos ?
            </p>
          </section>
        </section>
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
