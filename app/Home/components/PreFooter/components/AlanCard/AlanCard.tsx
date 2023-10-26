//import Alan from '@app/assets/img/AlanBuscaglia.png';
import { TutiImgZoom } from '@app/common';
//import Image from 'next/image';

import styles from './styles/alanCard.module.css';

export const AlanCard = () => {
  return (
    <article className={styles.footer__alanCard}>
      <TutiImgZoom />
      <section className={styles.footer__textContainer}>
        <header className={styles.footer__alanTitle}>Alan Buscaglia</header>
        <p className={styles.footer_alanProfessionalDescription}>
          Ingeniero y arquitecto de Software Front-end
        </p>
        <p className={styles.footer__alanDescription}>
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
