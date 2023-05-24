import '@app/styles/global.css';
import { ReactNode } from 'react';

import styles from './styles/layout.module.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={styles['contact-theme']}>{children}</div>;
}
