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

export const Controller = () => {
  return (
    <section className={controlStyles.footer__controller}>
      <header>Enlaces al exterior:</header>
      <section className={controlStyles.footer__controllerUp}>
        <button className={controlStyles.footer__controllerCard1}>
          <InstagramIcon />
        </button>
        <button className={controlStyles.footer__controllerCard2}>
          <GithubIcon />
        </button>
        <button className={controlStyles.footer__controllerCard7}>
          <TikTokIcon />
        </button>
        <button className={controlStyles.footer__controllerCard3}>
          <DiscordIcon />
        </button>
      </section>
      <section className={controlStyles.footer__controllerMiddle}>
        <button className={controlStyles.footer__controllerCardMid}>
          <YouTubeIcon />
        </button>
      </section>
      <section className={controlStyles.footer__controllerDown}>
        <button className={controlStyles.footer__controllerCard4}>
          <TwitterIcon />
        </button>
        <button className={controlStyles.footer__controllerCard5}>
          <SpotifyIcon />
        </button>
        <button className={controlStyles.footer__controllerCard8}>
          <LinkedInIcon />
        </button>
        <button className={controlStyles.footer__controllerCard6}>
          <TwitchIcon />
        </button>
      </section>
    </section>
  );
};
