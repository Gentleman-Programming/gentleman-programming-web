/* `import '@app/styles/global.css' */
import '@app/styles/global.css';

/* Importing four components the `@app/components` */
import { TutiFooterFinal, TutiTop } from '@app/common';
import { NavBar, Pag404 } from '@app/components';

/* `import style from './styles/page.module.css' */

import { NavDiscordTuti } from './components';
import style from './styles/discord.module.css';

/* Export the object named metadata */
export const metadata = {
  title: 'GP -> Discord', // page title
  description: 'Discord page', // page description
};

/**
 * Renders a discord component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Discord() {
  return (
    <div className={style.discord__theme}>
      {/* Renders the navigation bar */}
      <NavBar />
      {/* Container for the Discord component */}
      <div className={style.discord__container}>
        {/* Renders the "Server Name" component */}
        <NavDiscordTuti />
        {/* Renders the "page 404" component */}
        <Pag404 />
      </div>
      {/* Render footer */}
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
