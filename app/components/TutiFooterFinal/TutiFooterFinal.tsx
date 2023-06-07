/* `import { FC } from 'react'. */
import { FC } from 'react';

/* `import styles from './styles/TutiFooterFinal.module.css'. */
import styles from './styles/TutiFooterFinal.module.css';
/* his component is then used in the `TutiFooterFinal` component to render a horizontal
line. */
import {
  TutiCurrentYear /* is TutiCurrentYear the component */,
} from '../TutiCurrentYear';
import { TutiHr /* is TutiHr the component */ } from '../TutiHr';
/**
 * Renders a TutiFooterFinal component.
 * @returns {JSX.Element} The rendered component.
 */
export const TutiFooterFinal: FC = () => {
  // Get the current year
  const year = TutiCurrentYear();
  // Render a container div that wraps the rest of the component
  return (
    /* Rendering a container `div` element with a class name of `tutiFooterFinal__container`. */
    <div className={styles.tutiFooterFinal__container}>
      {/* Render a horizontal rule */}
      <TutiHr />
      {/* Render a section that contains the last paragraph and legend */}
      <section className={styles.tutiFooterFinal__lastSection}>
        {/* Render a paragraph thanking the community */}
        <p>Made with 💜 by the community</p>
        {/* Render a legend with company information */}
        <legend>
          Gentleman Programming⟨™⟩ {year} - Casi todos los derechos reservados.
        </legend>
      </section>
    </div>
  );
};
