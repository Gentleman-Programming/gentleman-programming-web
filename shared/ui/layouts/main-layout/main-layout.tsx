import { FC, ReactNode } from 'react';

import styles from './main-layout.module.scss';
import Header from '@/ui/layouts/header/header';
import Sidenav from '@/ui/layouts/sidebar/sidebar';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.sidenav}>
      <Sidenav />
    </div>
    <div className={styles.content}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  </div>
);

export default MainLayout;
