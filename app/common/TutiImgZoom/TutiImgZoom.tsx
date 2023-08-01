import { FC } from 'react';

import styles from './styles/TutiImgZoom.module.css';

export const TutiImgZoom: FC = () => {
  return (
    <div className={styles.TutiImgZoom__container}>
      <figure className={styles.TutiImgZoom__figure}>
        <img
          className={styles.TutiImgZoom__img}
          src="https://i.imgur.com/D3PdaOX.png"
          alt="Alan"
        />
        <figcaption className={styles.TutiImgZoom__figcaption}>Alan</figcaption>
      </figure>
    </div>
  );
};
