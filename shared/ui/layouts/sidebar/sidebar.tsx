import { FC } from 'react';

import styles from './sidebar.module.scss';
const Sidenav: FC = () => (
  <aside className={styles.root}>
    <p>sidebar</p>
  </aside>
);

export default Sidenav;
