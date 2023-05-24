import React from 'react';

import alan from '@app/assets/img/alan-buscaglia.png';
import Image from 'next/image';

import styles from './alancard.module.css';
const AlanCard = () => {
  return (
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
  );
};

export default AlanCard;
