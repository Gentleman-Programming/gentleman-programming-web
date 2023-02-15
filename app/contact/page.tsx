import { FC } from 'react';

import styles from './page.module.scss';
import ContactSection from './shared/ui/components/contact-section/contact-section';
import GenericLayout from '@/ui/layouts/generic-layout/generic-layout';

const Contact: FC = () => (
  <div className={styles.root}>
    <GenericLayout type="md">
      <ContactSection />
    </GenericLayout>
  </div>
);

export default Contact;
