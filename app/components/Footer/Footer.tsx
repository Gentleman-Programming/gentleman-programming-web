import React from 'react';

import Image from 'next/image';

import controlStyles from './controller.module.css';
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
import alan from '../../assets/alan-buscaglia.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <div className={styles.footer__container}>
        <section className={styles.footer__shortAbout}>
          <article className={styles.footer__alanCard}>
            <Image
              className={styles.footer__alanImg}
              src={alan}
              alt="foto de Alan Buscaglia"
            />
            <section className={styles.footer__textContainer}>
              <header className={styles.footer__alanTitle}>
                Alan Buscaglia
              </header>
              <p>Ingeniero y arquitecto de Software Front-end</p>
              <p>
                ChatGPT dice que mi contenido es
                <i> valioso y cumple con los estándares de calidad.</i>
              </p>
              <p>
                <q>
                  Desde mi cabeza, corazón y experiencia, para todo el mundo.
                </q>
              </p>
            </section>
          </article>
        </section>
        <section className={styles.footer__aboutCommunityContent}>
          <header>Sobre mi contenido</header>
          <p>
            Todo mi contenido está orientado a seniors, si vos lo entendés, es
            porque lo sos.
          </p>
          <p>
            Entrevistas a la comunidad; mejores prácticas ( o sea más que{' '}
            <i>buenas prácticas</i>); dominar TypeScript; patrones de diseño;
            patrones de arquitectura.
          </p>
        </section>
      </div>
      <section className={controlStyles.footer__controller}>
        <legend>Podés encontrarme en:</legend>
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
      <hr className={styles.footer__divider} />
      <section className={styles.footer__lastSection}>
        <p>Made with 💜 by the community</p>
        <legend>
          Gentleman Programming⟨™⟩ 2023 // Casi todos los derechos reservados{' '}
        </legend>
      </section>
    </footer>
  );
};

export default Footer;
