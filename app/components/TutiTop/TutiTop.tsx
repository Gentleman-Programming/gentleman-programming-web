import { FC } from 'react';

import styles from './styles/TutiTop.module.css';

/**
 * A functional component representing the TutiTop.
 * @returns A JSX element representing the TutiTop.
 */
export const TutiTop: FC = () => {
  return (
    <div className={styles.TutiTop__container}>
      {/* Link to TutiTop */}
      <a href="#" className={styles.TutiTop}></a>
    </div>
  );
};
