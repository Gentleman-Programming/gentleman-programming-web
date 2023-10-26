import { FC } from 'react';

import { z } from 'zod';

import styles from './styles/form.module.css';

const contactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(600),
});

export const Form: FC = () => {
  return (
    <form className={`${styles.form} ${styles['contact-form']}`}>
      <h1 className={styles.form__heading}>Contact me</h1>

      <div className={styles.form__group}>
        <input
          type="text"
          className={styles.form__input}
          placeholder="You name"
          id="name"
          required
        />
        <label htmlFor="name" className={styles.form__label}>
          Nice to meet you!
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type="email"
          className={styles.form__input}
          placeholder="You email"
          id="email"
          required
        />
        <label htmlFor="email" className={styles.form__label}>
          Nice email!
        </label>
      </div>
      <div className={styles.form__group}>
        <textarea
          className={styles.form__input}
          id="message"
          name="message"
          placeholder="Describe your problem locura ;)"
          required
        ></textarea>
        <label className={styles.form__label} htmlFor="message">
          Tell me more!!
        </label>
      </div>
      <div>
        <button className={styles.form__submit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
