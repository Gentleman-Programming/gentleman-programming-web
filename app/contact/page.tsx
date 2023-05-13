import { Card, FaqList, FormContact } from './components';
import styles from './styles/styles.module.css';

export const metadata = {
  title: 'Contact',
};

const Contact = () => (
  <div className={styles.container}>
    <section className={styles['grid-contact']}>
      <div className={styles['grid-contact__form']}>
        <FormContact />
      </div>
      <div className={styles['grid-contact__social']}>
        <Card />
      </div>
    </section>
    <section className={styles['section-question']}>
      <FaqList />
    </section>
  </div>
);

export default Contact;
