'use client';
import React from 'react';

import styles from './prefooter.module.css';
import PrefooterCard from './PrefooterCard';
import team from './team.json';
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
}

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
      <h2 className={styles.prefooter__title}>Gentleman Rockstars</h2>
      <div
        className={styles.cards__container}
        style={{
          width: `${50 * team.length}%`,
          transform: `translateX(-${currentSlide * 10}%)`,
        }}
      >
        {team.map((member: Member) => (
          <PrefooterCard key={'card' + member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Prefooter;
