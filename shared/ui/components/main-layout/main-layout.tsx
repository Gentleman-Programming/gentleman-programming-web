import { FC, ReactNode } from 'react';

import styles from './main-layout.module.scss';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
