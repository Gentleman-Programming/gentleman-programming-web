import { FC } from 'react';

import Tuti from '@app/assets/gif/tuti.gif';
import { AppleIcon, SpotifyIcon } from '@app/components';
import Image from 'next/image';

import styles from './styles/card.module.css';

export const Card: FC = () => {
  return (
    <div className={styles['profile-card']}>
      <figure className={styles['profile-card__img']}>
        <Image
          src={Tuti}
          alt="Foto de Alan Buscaglia"
          className={`${styles.footer__alanImg}`}
          height={500}
          width={500}
        />
        <figcaption className="story__caption">Mary Smith</figcaption>
      </figure>
      <div className={styles['profile-card__cnt']}>
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
          <AppleIcon />
          <SpotifyIcon height={44} />
        </div>
      </div>
    </div>
  );
};
