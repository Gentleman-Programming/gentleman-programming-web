import React from 'react';

import data from '../../Data/response.json';

const HomeYoutube = () => {
  const { items } = data;
  const channelTitle = items[0].snippet.channelTitle;
  return (
    <main>
      <header>
        {/* <img src="youtube_logo.png" alt="YouTube Logo"/> */}
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
        {/* <img src="user_avatar.png" alt="User Avatar"/> */}
      </header>
      <div className="channel-banner">
        {/* <img src="channel_banner.png" alt="Channel Banner" /> */}
      </div>
      <div className="channel-details">
        <h1>{channelTitle}</h1>
        <p>Hola gente !! Cómo andamos ?</p>
      </div>
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
