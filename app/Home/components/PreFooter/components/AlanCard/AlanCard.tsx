import Alan from '@app/assets/img/AlanBuscaglia.png';
import Image from 'next/image';

import styles from './styles/alanCard.module.css';
export const AlanCard = () => {
  return (
    <article className={styles.footer__alanCard}>
      <Image
        className={styles.footer__alanImg}
        src={Alan}
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
