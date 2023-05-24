'use client';
import React from 'react';

import Controller from './Controller';
import styles from './footer.module.css';
import FooterCard from './FooterCard';
import team from '../PreFooter/team.json';
export interface Member {
  name: string;
  pic: string;
  role: string;
  description: string;
  linkedin: string;
  portfolio: string;
  github: string;
  fb: string;
  twitter: string;
  twitch: string;
  visibility: boolean;
}

const Footer = () => {
  const [currentContent, setCurrentContent] = React.useState(3);
  React.useEffect(() => {
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
  const croppedTeam = team[currentContent];
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <h2 className={styles.footercard__title}>Gentleman Rockstars</h2>
      <div className={styles.footer__container}>
        <FooterCard key={'card' + croppedTeam.name} member={croppedTeam} />
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
