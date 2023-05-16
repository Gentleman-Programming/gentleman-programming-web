import type { ReactNode } from 'react';

import style from '@page/styles/layout.module.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={style.layout__grid}>{children}</div>;
}
