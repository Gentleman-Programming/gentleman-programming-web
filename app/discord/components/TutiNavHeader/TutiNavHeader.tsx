import { FC } from 'react';

import { MundoIcon } from '@app/components';

import { ITutiNavHeaderProps } from './interface';
import styles from './styles/TutiNavHeader.module.css';

export const TutiNavHeader: FC<ITutiNavHeaderProps> = ({
  title,
}: ITutiNavHeaderProps) => {
  return (
    <header className={styles.TutiNavHeader__header}>
      <p className={styles.TutiNavHeader__title}>
        <MundoIcon />
        {` ${title}`}
      </p>
    </header>
  );
};
