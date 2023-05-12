'use client';
import React from 'react';

import styles from './prefooter.module.css';
import team from './team.json';
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Footer/Icons';

const Prefooter = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide + 2 >= team.length ? 0 : currentSlide + 2
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.prefooter}>
      <header className={styles.prefooter__title}>Gentleman Rockstars</header>
      <div
        className={styles.cards__container}
        style={{
          width: `${50 * team.length}%`,
          transform: `translateX(-${currentSlide * 50}%)`,
        }}
      >
        {team.map((member) => (
          <article
            key={member.name + 'article'}
            className={styles.prefooter__card}
          >
            <div className={styles.prefooter__card_info}>
              <img
                alt={member.name + 'pic'}
                className={styles.prefooter__card_pic}
                src={member.pic}
              />
              <header className={styles.prefooter__card_header}>
                <p className={styles.prefooter__card_name}>{member.name}</p>
                <p>{member.role}</p>
              </header>
              <section className={styles.prefooter__card_description}>
                <p>{member.description}</p>
              </section>
              <div className={styles.prefooter__card_info_socials}>
                <a href={member.fb} target="__blank" title="Facebook">
                  <FacebookIcon />
                </a>
                <a href={member.twitter} target="__blank" title="Twitter">
                  <TwitterIcon />
                </a>
                <a href={member.linkedin} target="__blank" title="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={member.github} target="__blank" title="GitHub">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Prefooter;
