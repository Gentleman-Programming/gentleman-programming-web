import { FC } from 'react';

import { TutiHr } from '@app/components';

import { Carousel, Controller } from './components';
import team from './resources/Team/team.json';
import styles from './styles/footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <TutiHr />
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
    </footer>
  );
};
