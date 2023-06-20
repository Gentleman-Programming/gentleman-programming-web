/* `import { FC } from 'react'. */
import { FC } from 'react';

/* The `import { ITutiIAmProps } from './interface'. */
import { ITutiIAmProps } from './interface';
/* `import styles from './styles/TutiIAm.module.css'. */
import styles from './styles/TutiIAm.module.css';

/**
 * Functional component that renders a div element with the text "TutiIAm".
 * @param {ITutiIAmProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */

export const TutiIAm: FC<ITutiIAmProps> = () => {
  return <div className={styles.TutiIAm}>TutiIAm</div>;
};
