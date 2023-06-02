import { FC } from 'react';

import styles from './styles/HomeContainer.module.css';
import { Body } from '../Body';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PreFooter } from '../PreFooter';

export const HomeContainer: FC = () => {
  return (
    <div className={styles.HomeContainer}>
      <header className={styles.header}>
        <div>
          <Header />
          <Body />
          <PreFooter />
          <Footer />
        </div>
      </header>
    </div>
  );
};
