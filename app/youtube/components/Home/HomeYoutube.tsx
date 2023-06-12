import React from 'react';

import data from '../../Data/response.json';
import styles from '../../styles/youtube.module.css';

const HomeYoutube = () => {
  const { items } = data;
  const channelTitle = items[0].brandingSettings?.channel.title;
  const channelBanner = items[0].brandingSettings?.image.bannerExternalUrl;
  return (
    <main>
      <header className={styles.youtube__navBarSection}>
        <input type="text" placeholder="Search" />
        <button type="submit">Lupa</button>
        {/* call the "chrome.identity.getProfileUserInfo" function to retrieve the user's basic profile information. Note that the will need to grant your extension permission to access their profile information. To request this permission, you can call the "chrome.identity.getAuthToken" function, which will prompt the user to sign in to their Google account and grant your extension access to their basic profile information.  */}
        {/* <img src="user_avatar.png" alt="User Avatar"/> */}
      </header>
      <div className={styles.youtube__banner}>
        <img src={channelBanner} alt="Gentleman Banner" />
      </div>
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
        <h1>{channelTitle}</h1>
        <h4>@GentlemanProgramming</h4>
        <p>Hola gente !! Cómo andamos ?</p>
      </section>
      <section className="video-section">
        {items.map((video) => (
          <div
            key={video.id.videoId}
            className={'video-thumbnail' + video.id.videoId}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={'Video Thumbnail' + video.id.videoId}
            />
            <h2>{video.snippet.title}</h2>
            <p>666 views</p>
            <p>{video.snippet.publishedAt}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeYoutube;
