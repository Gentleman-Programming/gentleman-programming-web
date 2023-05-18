import { NavBar } from '@app/components';

import styles from './styles/layout.module.css';
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div className={styles['contact-theme']}>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
