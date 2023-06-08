/* `import '@app/styles/global.css' */
import '@app/styles/global.css';

/* Importing four components the `@app/components` */
import { TutiFooterFinal, TutiTop } from '@app/common';
import {
  NavBar, // imports the `NavBar` component
  Pag404, // imports the `Pag404` component
} from '@app/components';

/* `import style from './styles/page.module.css' */

import style from './styles/project.module.css';

/* Export the object named metadata */
export const metadata = {
  title: 'GP -> Project', // page title
  description: 'Project page', // page description
};
/**
 * Renders a discord component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Project() {
  return (
    <div className={style.project__theme}>
      {/* Renders the navigation bar */}
      <NavBar />
      {/* Container for the Discord component */}
      <div className={style.project__container}>
        {/* Renders the "page 404" component */}
        <Pag404 />
        {/* Render footer */}
      </div>
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
