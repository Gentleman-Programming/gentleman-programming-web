/* `import '@app/styles/global.css' */
import '@app/styles/global.css';

/* Importing four components the `@app/components` */
import {
  NavBar, // imports the `NavBar` component
  Pag404, // imports the `Pag404` component
  TutiFooterFinal, // imports the `TutiFooterFinal` component
  TutiTop, // imports the `TutiTop` component
} from '@app/components';

/* `import style from './styles/page.module.css' */
import style from './styles/page.module.css';

/* Export the object named metadata */
export const metadata = {
  title: 'GP -> LinkedIn', // page title
  description: 'LinkedIn page', // page description
};
/**
 * Renders a discord component.
 * @returns {JSX.Element} The rendered component.
 */
export default function LinkedIn() {
  return (
    <>
      {/* Renders the navigation bar */}
      <NavBar />
      {/* Container for the Discord component */}
      <div className={style.linkedIn__container}>
        {/* Renders the "page 404" component */}
        <Pag404 />
        {/* Render footer */}
      </div>
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </>
  );
}
