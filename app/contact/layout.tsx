/**
 * These lines of code are importing various
 * components and styles from different
 * files and modules.
 */

import '@app/styles/global.css';
import { ReactNode } from 'react';

import styles from './styles/layout.module.css';

/**
 * This is a TypeScript React function that returns a div with a specific class name and renders its
 * children.
 * @param  - The function `RootLayout` is a React component that takes in a single parameter called
 * `children`. The type of `children` is `ReactNode`, which means it can accept any valid React node as
 * its children. The component returns a `div` element with a class name of `contact-theme
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={styles['contact-theme']}>{children}</div>;
}
