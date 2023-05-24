'use client';
import React from 'react';

import AlanCard from './AlanCard';
import styles from './prefooter.module.css';

const Prefooter = () => {
  return (
    <section className={styles.prefooter}>
      <div className={styles.cards__container}>
        <AlanCard />
      </div>
    </section>
  );
};

export default Prefooter;
