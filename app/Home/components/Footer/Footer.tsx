'use client';
import { FC, useEffect, useState } from 'react';

import { Controller, FooterCard } from './components';
import { Member } from './interface';
import team from './resources/Team/team.json';
import styles from './styles/footer.module.css';

export const Footer: FC = () => {
  const [currentContent, setCurrentContent] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => {
        if (prevContent === team.length - 1) {
          return 0;
        } else {
          return prevContent + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentContent]);
  const croppedTeam: Member = team[currentContent];
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <h2 className={styles.footercard__title}>Gentleman Rockstars</h2>
      <div className={styles.footer__container}>
        {croppedTeam.visibility && (
          <FooterCard key={'card' + croppedTeam.name} member={croppedTeam} />
        )}
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
