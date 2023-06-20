import { FC } from 'react';

import { TutiLoaderIcon } from '@app/components';

import styles from './styles/TutiLoader.module.css';

export const TutiLoader: FC = () => {
  return (
    <div className={styles.TutiLoader}>
      <TutiLoaderIcon />
    </div>
  );
};
