import { FC } from 'react';

import styles from './styles/contactBody.module.css';
import { Faq } from '../Faq';
import { Form } from '../Form';
import { Card } from '../SocialCard';

export const ContactBody: FC = () => {
  return (
    <div className={styles['container-contact']}>
      <section className={styles['grid-contact']}>
        <div className={styles['grid-contact__form']}>
          <Form />
        </div>
        <div className={styles['grid-contact__social']}>
          <Card />
        </div>
      </section>
      <section className={styles['section-question']}>
        <Faq />
      </section>
    </div>
  );
};
