import type { ReactNode } from 'react';

import style from './styles/layout.module.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={style.discord__theme}>{children}</div>;
}
