import { Card, Faq, Form } from './components';
import styles from './styles/contact.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Contact page',
};

const Contact = () => (
  <div className={styles.container}>
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

export default Contact;
