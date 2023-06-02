import { FC } from 'react';

import styles from './styles/TutiFooterFinal.module.css';
import { TutiHr } from '../TutiHr';

export const TutiFooterFinal: FC = () => {
  return (
    <div className={styles.tutiFooterFinal__container}>
      <TutiHr />
      <section className={styles.tutiFooterFinal__lastSection}>
        <p>Made with 💜 by the community</p>
        <legend>
          Gentleman Programming⟨™⟩ 2023 // Casi todos los derechos reservados{' '}
        </legend>
      </section>
    </div>
  );
};
