import { FC } from 'react';

import styles from './style/carousel.module.css';
import { Member, Team } from '../../interface';
import { FooterCard } from '../FooterCard';
type Props = {
  team: Team;
};
export const Carousel: FC<Props> = ({ team }) => {
  return (
    <section className={styles.carousel}>
      <ul className={styles.carouselSlides}>
        {team.map(
          (member: Member) =>
            member.visibility && (
              <>
                <input
                  type={'radio'}
                  name={'radio-buttons'}
                  id={`${member.index}`}
                  checked
                />
                <li
                  className={styles.carouselSlideContainer}
                  key={'slide' + member.name}
                >
                  <div className={styles.carouselSlideCard}>
                    <FooterCard key={'card' + member.name} member={member} />
                  </div>
                  {/*CONTROLES */}
                  {member.visibility && (
                    <div className={styles.carouselControls}>
                      <label
                        htmlFor={`${member.index - 1}`}
                        className={styles.carouselPrevSlide}
                      >
                        <span>&lsaquo;</span>
                      </label>
                      <label
                        htmlFor={`${member.index + 1}`}
                        className={styles.carouselNextSlide}
                      >
                        <span>&rsaquo;</span>
                      </label>
                    </div>
                  )}
                  {/*CONTROLES */}
                </li>
                {/*puntos*/}
                <div className={styles.carouselDots}>
                  {member.visibility && (
                    <label
                      htmlFor={`${member.index}`}
                      className={styles.carouselDot}
                      id={'dot-' + member.index}
                    />
                  )}
                </div>
                {/*puntos*/}
              </>
            )
        )}
      </ul>
    </section>
  );
};
