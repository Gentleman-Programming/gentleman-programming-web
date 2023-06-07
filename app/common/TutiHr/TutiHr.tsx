/* `import { FC } from 'react'. */
import { FC } from 'react';

/* `import styles from './styles/TutiHr.module.css'. */
import styles from './styles/TutiHr.module.css';

/**
 * Renders a TutiHr component.
 * @returns {JSX.Element} The rendered component.
 */
export const TutiHr: FC = () => {
  // Renders a horizontal rule with a custom class name.
  return <hr className={styles.TutiHr__divider} />;
};
