import { FC } from 'react';

import { AlanCard } from './components';
import styles from './styles/preFooter.module.css';

export const PreFooter: FC = () => {
  return (
    <section className={styles.preFooter}>
      <div className={styles.cards__container}>
        <AlanCard />
      </div>
    </section>
  );
};
