import { FC } from 'react';

import styles from './styles/TutiLightBox.module.css';

export const TutiLightBox: FC = () => {
  return (
    <div className={styles.TutiLightBox}>
      <a href="#img1" className={styles.lightbox} id="img">
        <img src="https://picsum.photos/seed/9/500/300" />
      </a>

      <a href="#" className={styles.lightbox} id="img1">
        <img src="https://picsum.photos/seed/9/900/450" />
      </a>
    </div>
  );
};
