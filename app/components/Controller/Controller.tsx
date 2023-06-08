import { FC } from 'react';

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
} from '@app/components';

import controlStyles from './styles/controller.module.css';

export const Controller: FC = () => {
  return (
    <section className={controlStyles.footer__controller}>
      <header>Enlaces al exterior:</header>
      <section className={controlStyles.footer__controllerUp}>
        <button className={controlStyles.footer__controllerCard1}>
          <a
            href="https://www.instagram.com/gentlemanprogramming"
            target="__blank"
          >
            <InstagramIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard2}>
          <a href="https://github.com/Gentleman-Programming" target="__blank">
            <GithubIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard7}>
          <a
            href="https://www.tiktok.com/@gentlemanprogramming"
            target="__blank"
          >
            <TikTokIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard3}>
          <a href="https://discord.com/invite/KEavKkDc5Y" target="__blank">
            <DiscordIcon />
          </a>
        </button>
      </section>
      <section className={controlStyles.footer__controllerMiddle}>
        <button className={controlStyles.footer__controllerCardMid}>
          <a
            href="https://www.youtube.com/c/GentlemanProgramming"
            target="__blank"
          >
            <YouTubeIcon />
          </a>
        </button>
      </section>
      <section className={controlStyles.footer__controllerDown}>
        <button className={controlStyles.footer__controllerCard4}>
          <a href="https://twitter.com/G_Programming" target="__blank">
            <TwitterIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard5}>
          <a
            href="https://open.spotify.com/show/4AhopzZexw2wOMJyIcBWlx?si=3e3f8c8fd5844b66"
            target="__blank"
          >
            <SpotifyIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard8}>
          <a href="https://www.linkedin.com/in/alanbuscaglia/" target="__blank">
            <LinkedInIcon />
          </a>
        </button>
        <button className={controlStyles.footer__controllerCard6}>
          <a
            href="https://www.twitch.tv/gentleman_programming"
            target="__blank"
          >
            <TwitchIcon />
          </a>
        </button>
      </section>
    </section>
  );
};
