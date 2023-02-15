import { MainLayout } from '@/ui/components/main-layout/main-layout';
import { Sidebar } from '@/ui/components/sidebar/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header>Header</header>
        <MainLayout>
          <Sidebar />
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
