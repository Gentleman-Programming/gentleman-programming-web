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
  visibility: boolean;
}

const Prefooter = () => {
  const [currentContent, setCurrentContent] = React.useState(0);
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
    <section className={styles.prefooter}>
      <h2 className={styles.prefooter__title}>Gentleman Rockstars</h2>
      <div className={styles.cards__container}>
        <PrefooterCard key={'card' + croppedTeam.name} member={croppedTeam} />
      </div>
    </section>
  );
};

export default Prefooter;
