import React from 'react';

import alan from '@app/assets/alan-buscaglia.png';
import Image from 'next/image';

import Controller from './Controller';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <div className={styles.footer__container}>
        <article className={styles.footer__alanCard}>
          <Image
            className={styles.footer__alanImg}
            src={alan}
            alt="foto de Alan Buscaglia"
          />
          <section className={styles.footer__textContainer}>
            <header className={styles.footer__alanTitle}>Alan Buscaglia</header>
            <p>Ingeniero y arquitecto de Software Front-end</p>
            <p>
              ChatGPT dice que mi contenido es
              <i> valioso y cumple con los estándares de calidad.</i>
            </p>
            <p>
              <q>Desde mi cabeza, corazón y experiencia, para todo el mundo.</q>
            </p>
          </section>
        </article>

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
        <section className={styles.footer__aboutCommunityContent}>
          <header>Lorem ipsum</header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh
            nulla, tempus vitae fringilla ut, laoreet a tellus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </section>
        <Controller />
      </div>
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
