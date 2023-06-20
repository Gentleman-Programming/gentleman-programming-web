/* `import type { ReactNode } from 'react'. */
import type { ReactNode } from 'react';
/**
 * Component that wraps the main content of the application.
 * @param {ReactNode} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - The JSX code for the component.
 */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  // Render the children components within the layout div.
  return <div>{children}</div>;
}
