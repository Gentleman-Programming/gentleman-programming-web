import { FC } from 'react';

import { Controller } from './components';
import { Carousel } from './components/Carousel/Carousel';
import team from './resources/Team/team.json';
import styles from './styles/footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <h2 className={styles.footercard__title}>Gentleman Rockstars</h2>
      <div className={styles.footer__container}>
        <Carousel team={team} />
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
