/* `import type { ReactNode } from 'react';`*/
import type { ReactNode } from 'react';

/* `import style from './styles/layout.module.css';` */
import style from './styles/layout.module.css';

/**
 * Renders a RootLayout component.
 *
 * @param {object} props The component props.
 * @param {ReactNode} props.children The children to render.
 * @returns {JSX.Element} The rendered component.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // Return the div with the appropriate class and children
    <div className={style.linkedIn__theme}>
      {/* Render the children */}
      {children}
    </div>
  );
}
