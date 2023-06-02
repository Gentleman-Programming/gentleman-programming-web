import { FC } from 'react';

import styles from './styles/TutiLoader.module.css';
import { TutiLoaderIcon } from '../Icons';

export const TutiLoader: FC = () => {
  return (
    <div className={styles.TutiLoader}>
      <TutiLoaderIcon />
    </div>
  );
};
