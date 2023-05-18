import { NavBar } from '@app/components';
import { Header, Body, Footer, Prefooter } from '@app/Home';

import styles from './styles/layout.module.css';
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles['contact-theme']}>
      <section className={styles['contact-theme__grid']}>
        <NavBar />
        {children}
      </section>
    </section>
  );
}
