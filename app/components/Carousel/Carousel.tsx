import { FC } from 'react';

import styles from './style/carousel.module.css';
import { Member, Team } from '../MemberCard/interface';
// import { MemberCard } from '../MemberCard';
type Props = {
  team: Team;
};
export const Carousel: FC<Props> = ({ team }) => {
  const renderMember = (member: Member) => {
    const { visibility, name, index } = member;
    if (!visibility) return null;
    return (
      <>
        <input
          type="radio"
          name="radio-buttons"
          id={`${index}`}
          defaultChecked={index === 1}
        />
        <li key={`slide-${name}`} className={styles.carouselSlideContainer}>
          <div className={styles.carouselSlideCard}>
            {/* <MemberCard member={member} key={member.index} /> */}
          </div>
          {/* Controls */}
          <div className={styles.carouselControls}>
            {index > 1 && (
              <label
                htmlFor={`${index - 1}`}
                className={styles.carouselPrevSlide}
              >
                <span>&lsaquo;</span>
              </label>
            )}
            {index < team.length - 1 && (
              <label
                htmlFor={`${index + 1}`}
                className={styles.carouselNextSlide}
              >
                <span>&rsaquo;</span>
              </label>
            )}
          </div>
          {/* Controls */}
        </li>
      </>
    );
  };
  return (
    <section className={styles.carousel}>
      <ul className={styles.carouselSlides}>
        {team.map(renderMember)}
        <div className={styles.carouselDots}>
          {team.map(
            (member) =>
              member.visibility && (
                <label
                  key={`dot-${member.index}`}
                  htmlFor={`${member.index}`}
                  className={styles.carouselDot}
                  id={`dot-${member.index}`}
                />
              )
          )}
        </div>
      </ul>
    </section>
  );
};
