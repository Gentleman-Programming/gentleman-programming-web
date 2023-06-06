import { FC } from 'react';

import { ITutiModalProps } from './interface';
import styles from './styles/TutiModal.module.css';

export const TutiModal: FC<ITutiModalProps> = ({ id }: ITutiModalProps) => {
  return (
    <div className={styles.TutiModal__container}>
      <a href={`#img${id}`}>
        <center>
          <img
            src="http://www.clipartbest.com/cliparts/9Tp/enR/9TpenRLTE.svg"
            height="90"
          />
        </center>
      </a>
      <div id={`img${id}`} className={styles.TutiModal__wrap}>
        <div className={styles.TutiModal__modal}>
          <h2>I&rsquo;m A Sleek Modal</h2>
          <p>Pretty sweet, eh?</p>
          <br />
          <a href="#" className={styles.TutiModal__close}>
            X
          </a>
        </div>
      </div>
      <a href="#" className={styles.TutiModal__lightBox} />
    </div>
  );
};
