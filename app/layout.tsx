import { ReactNode } from 'react';

import '../shared/ui/styles/global.scss';
import MainLayout from '@/ui/layouts/main-layout/main-layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
