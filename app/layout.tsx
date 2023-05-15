import type { ReactNode } from 'react';

import style from '@page/styles/layout.module.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={style.app__grid}>
      <head />
      <body>{children}</body>
    </html>
  );
}
