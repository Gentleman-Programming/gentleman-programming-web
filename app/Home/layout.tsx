import { ReactNode } from 'react';

import style from './styles/layout.module.css';
export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={style.home__layout}>{children}</div>;
}
