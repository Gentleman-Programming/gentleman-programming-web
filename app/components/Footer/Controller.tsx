import React from 'react';

import controlStyles from './controller.module.css';
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

const Controller = () => {
  return (
    <section className={controlStyles.footer__controller}>
      <header>Podés encontrarme en:</header>
      <section className={controlStyles.footer__controllerup}>
        <button className={controlStyles.footer__controllercard1}>
          <InstagramIcon />
        </button>
        <button className={controlStyles.footer__controllercard2}>
          <GithubIcon />
        </button>
        <button className={controlStyles.footer__controllercard7}>
          <TikTokIcon />
        </button>
        <button className={controlStyles.footer__controllercard3}>
          <DiscordIcon />
        </button>
      </section>
      <section className={controlStyles.footer__controllermiddle}>
        <button className={controlStyles.footer__controllercardMid}>
          <YouTubeIcon />
        </button>
      </section>
      <section className={controlStyles.footer__controllerdown}>
        <button className={controlStyles.footer__controllercard4}>
          <TwitterIcon />
        </button>
        <button className={controlStyles.footer__controllercard5}>
          <SpotifyIcon />
        </button>
        <button className={controlStyles.footer__controllercard8}>
          <LinkedInIcon />
        </button>
        <button className={controlStyles.footer__controllercard6}>
          <TwitchIcon />
        </button>
      </section>
    </section>
  );
};

export default Controller;
