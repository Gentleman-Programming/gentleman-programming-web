import React from 'react';

import styles from './footer.module.css';
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from './Icons';

const Footer = () => {
  return (
    <footer className={styles.footercinho}>
      <hr className="divider" />
      <section className="up">
        <button className="card1">
          <InstagramIcon />
        </button>
        <button className="card2">
          <GithubIcon />
        </button>
        <button className="card7">
          <TikTokIcon />
        </button>
        <button className="card3">
          <DiscordIcon />
        </button>
      </section>
      <section className="middle">
        <button className="cardMid">
          <YouTubeIcon />
        </button>
      </section>
      <section className="down">
        <button className="card4">
          <TwitterIcon />
        </button>
        <button className="card5">
          <SpotifyIcon />
        </button>
        <button className="card8">
          <LinkedInIcon />
        </button>
        <button className="card6">
          <TwitchIcon />
        </button>
      </section>
      <hr className="divider" />
      <section>Texto</section>
    </footer>
  );
};

export default Footer;
