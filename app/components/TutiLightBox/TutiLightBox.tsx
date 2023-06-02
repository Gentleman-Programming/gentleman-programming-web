import { FC } from 'react';

import { ITutiLightBoxProps } from './interface';
import styles from './styles/TutiLightBox.module.css';

export const TutiLightBox: FC<ITutiLightBoxProps> = ({
  id,
}: ITutiLightBoxProps) => {
  return (
    <div className={styles.TutiLightBox}>
      <a href={id} className={styles.lightbox} id="img">
        <img src="https://picsum.photos/seed/9/500/300" />
      </a>

      <a href="#" className={styles.lightbox} id={id}>
        <img src="https://picsum.photos/seed/9/900/450" />
      </a>
    </div>
  );
};
