/**
 * These lines of code are importing various
 * components and styles from different
 * files and modules.
 */
import { TutiFooterFinal, TutiTop } from '@app/common';
import { NavBar } from '@app/components';

import '@app/styles/global.css';
import { Card, Faq, Form } from './components';
import styles from './styles/page.module.css';

/* Exporting an object named `metadata` with two properties: `title` and `description`. These
properties contain information about the Contact page, such as its title and description, which can
be used for SEO purposes or for other metadata-related tasks. */
export const metadata = {
  title: 'GP -> Contact',
  description: 'Contact page',
};
/**
 * Renders the Contact page
 * @return {JSX.Element} The Contact page component
 */
export default function Contact() {
  return (
    <div className={styles['contact-theme']}>
      {/* Render navigation bar*/}
      <NavBar />
      {/* Render contact container */}
      <div className={styles['container-contact']}>
        {/* Render grid contact section*/}
        <section className={styles['grid-contact']}>
          {/* Render grid contact from */}
          <div className={styles['grid-contact__form']}>
            <Card />
          </div>
          {/* Render grid contact social */}
          <div className={styles['grid-contact__social']}>
            <Form />
          </div>
        </section>
        {/* Render grid contact question section */}
        <section className={styles['section-question']}>
          <Faq />
        </section>
      </div>
      {/* Render footer */}
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
