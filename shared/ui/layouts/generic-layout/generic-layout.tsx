import { FC, ReactNode } from 'react';

import styles from './generic-layout.module.scss';
import { LayoutType } from '@/lambdas/types';

type Props = {
  children: ReactNode;
  type: LayoutType;
};
const GenericLayout: FC<Props> = ({ children, type }) => (
  <div className={`${styles.root}`}>
    <div className={`${styles[type]}`}>{children}</div>
  </div>
);

export default GenericLayout;
