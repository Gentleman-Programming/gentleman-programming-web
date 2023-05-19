import { NavBar } from '@app/components';

import { Card, Faq, Form } from './components';
import ContactLayout from './layout';
import styles from './styles/contact.module.css';

export const metadata = {
  title: 'GP -> Contact',
  description: 'Contact page',
};

const Contact = () => (
  <ContactLayout>
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
  </ContactLayout>
);

export default Contact;
