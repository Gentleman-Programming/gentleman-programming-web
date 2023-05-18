import Image from 'next/image';

import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialLink,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from './components';
import { SOCIAL_LINKS, IconType } from './data';
import styles from './styles/card.module.css';
import alan from '../../../assets/alan-buscaglia.png';

export const Card = () => {
  return (
    <div className={styles['profile-card']}>
      <div className={styles['profile-card__img']}>
        <Image
          className={styles.footer__alanImg}
          src={alan}
          alt="foto de Alan Buscaglia"
        />
      </div>
      <div className={styles['profile-card__cnt']}>
        <div className={styles['profile-card__name']}>Alan Buscaglia</div>
        <div className={styles['profile-card__txt']}>
          Front End Lead Architect & Agile Coach at Erudit AI | Gentleman
          Programming Community & Content Creator | “Como ser front-end sin
          fallar en el intento” Book Author
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
          {SOCIAL_LINKS.map((link) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
