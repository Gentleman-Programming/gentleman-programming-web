import { NavBar, TutiFooterFinal, TutiTop } from '@app/components';

import { Card, Faq, Form } from './components';
import styles from './styles/page.module.css';

export const metadata = {
  title: 'GP -> Contact',
  description: 'Contact page',
};
function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles['container-contact']}>
        <section className={styles['grid-contact']}>
          <div className={styles['grid-contact__form']}>
            <Card />
          </div>
          <div className={styles['grid-contact__social']}>
            <Form />
          </div>
        </section>
        <section className={styles['section-question']}>
          <Faq />
        </section>
        <TutiFooterFinal />
      </div>
      <TutiTop />
    </>
  );
}
export default Contact;
