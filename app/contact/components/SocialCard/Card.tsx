import { FC } from 'react';

import Tuti from '@app/assets/gif/tuti.gif';
import { AppleIcon, SpotifyIcon } from '@app/components';
import Image from 'next/image';

import styles from './styles/card.module.css';

export const Card: FC = () => {
  return (
    <div className={styles['profile-card']}>
      <div className={styles['profile-card__img']}>
        <Image
          className={styles.footer__alanImg}
          // src={Alan}
          src={Tuti}
          alt="foto de Alan Buscaglia"
        />
      </div>
      <div className={styles['profile-card__cnt']}>
        {/* <div className={styles['profile-card__name']}>Alan Buscaglia</div>
        <div className={styles['profile-card__txt']}>
          Front End Lead Architect & Agile Coach at Erudit AI | Gentleman
          Programming Community & Content Creator | “Como ser front-end sin
          fallar en el intento” Book Author */}

        <div className={styles['profile-card__name']}>Mantente conectado</div>
        <div className={styles['profile-card__txt']}>
          Disfruta escuchando a Alan, sus consejos profesionales y experiencias
          que te ayudaran en tu día a día para convertirte en todo un Senior.
        </div>
        <div className={styles['profile-card-loc']}>
          <span className={styles['profile-card-loc__icon']}>
            <svg className={styles.icon}>
              <use xlinkHref="#icon-location"></use>
            </svg>
          </span>
          <span className={styles['profile-card-loc__text']}>Spain</span>
        </div>
        <div className={styles['profile-card__txt']}>
          También puedes encontrarme en:
        </div>
        <div className={styles['profile-card-social']}>
          {/* {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.link}
              href={link.link}
              socialClass={link.socialClass}
            >
              {link.icon === IconType.InstagramIcon && <InstagramIcon />}
              {link.icon === IconType.TwitterIcon && <TwitterIcon />}
              {link.icon === IconType.DiscordIcon && <DiscordIcon />}
              {link.icon === IconType.GithubIcon && <GithubIcon />}
              {link.icon === IconType.LinkedinIcon && <LinkedInIcon />}
              {link.icon === IconType.SpotifyIcon && <SpotifyIcon />}
              {link.icon === IconType.TiktokIcon && <TikTokIcon />}
              {link.icon === IconType.TwitchIcon && <TwitchIcon />}
              {link.icon === IconType.YoutubeIcon && <YouTubeIcon />}
            </SocialLink>
          ))} */}
          <AppleIcon />
          <SpotifyIcon />
        </div>
      </div>
    </div>
  );
};
