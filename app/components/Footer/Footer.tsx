import React from 'react';

import styles from 'app/components/Footer/footer.modules.css';
import Discord from 'public/Discord';
import Github from 'public/Github';
import Instagram from 'public/Instagram';
import LinkedIn from 'public/LinkedIn';
import Spotify from 'public/Spotify';
import TikTok from 'public/TikTok';
import Twitch from 'public/Twitch';
import Twitter from 'public/twitter';
import YouTube from 'public/YouTube';

const Footer = () => {
  return (
    <footer className={styles.footercinho}>
      <hr className="divider" />
      <section className="up">
        <button className="card1">
          <Instagram />
        </button>
        <button className="card2">
          <Github />
        </button>
        <button className="card7">
          <TikTok />
        </button>
        <button className="card3">
          <Discord />
        </button>
      </section>
      <section className="middle">
        <button className="cardMid">
          <YouTube />
        </button>
      </section>
      <section className="down">
        <button className="card4">
          <Twitter />
        </button>
        <button className="card5">
          <Spotify />
        </button>
        <button className="card8">
          <LinkedIn />
        </button>
        <button className="card6">
          <Twitch />
        </button>
      </section>
      <hr className="divider" />
      <section>Texto</section>
    </footer>
  );
};

export default Footer;
