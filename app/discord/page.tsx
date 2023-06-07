/**
 * These lines of code are importing various
 * components and styles from different
 * files and modules.
 * */
import '@app/styles/global.css';

import {
  InConstruction,
  NavBar,
  TutiFooterFinal,
  TutiTop,
} from '@app/components';

import style from './styles/page.module.css';

/**
 * Exporting an object named `metadata`
 * with properties: `title` and `description`.
 * These properties contain
 * information about the Discord page,
 * such as its title and description,.
 */
export const metadata = {
  title: 'GP -> Discord',
  description: 'Discord page',
};
/**
 * Renders a discord component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Discord() {
  return (
    <>
      {/* Renders the navigation bar */}
      <NavBar />
      {/* Container for the Discord component */}
      <div className={style.discord__container}>
        {/* Renders the "In Construction" component */}
        <InConstruction />
        {/* Render footer */}
      </div>
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </>
  );
}
