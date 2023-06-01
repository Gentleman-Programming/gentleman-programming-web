import { FC } from 'react';

import { Controller, FooterCard } from './components';
import team from './resources/Team/team.json';
import styles from './styles/footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__divider} />
      <h2 className={styles.footercard__title}>Gentleman Rockstars</h2>
      <div className={styles.footer__container}>
        <section className={styles.footer__carousel}>
          <ul className={styles.footer__carouselSlides}>
            {team.map(
              (member, index) =>
                member.visibility && (
                  <>
                    <input
                      type={'radio'}
                      name={'radio-buttons'}
                      id={member.name}
                      checked
                    />
                    <li
                      className={styles.footer__carouselSlideContainer}
                      key={'slide' + member.name}
                    >
                      <FooterCard key={'card' + member.name} member={member} />
                      <div className={styles.footer__carouselControls}>
                        <label
                          htmlFor={team[index - 1].name}
                          className={styles.footer__carouselPrevSlide}
                        >
                          <span>&lsaquo;</span>
                        </label>
                        <label
                          htmlFor={team[index + 1].name}
                          className={styles.footer__carouselNextSlide}
                        >
                          <span>&rsaquo;</span>
                        </label>
                      </div>
                    </li>
                    <div className={styles.footer__carouselDots}>
                      <label
                        htmlFor={member.name}
                        className={styles.footer__carouselDot}
                        id={'dot' + member.name}
                      ></label>
                    </div>
                  </>
                )
            )}
          </ul>
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
