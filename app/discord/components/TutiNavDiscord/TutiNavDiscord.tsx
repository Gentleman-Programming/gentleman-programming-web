import { FC } from 'react';

import { Pag404 } from '@app/components';

import { DataTutiNavDiscordLinks } from './data';
import { ITutiNavDiscordLink } from './interface';
import styles from './styles/TutiNavDiscord.module.css';
import { TutiNavDropdown } from '../TutiNavDropdown';

const renderLink = ({ id, title, href }: ITutiNavDiscordLink): JSX.Element => {
  const linkClass = styles.TutiNavDiscord__linksA;
  const titleClass = styles.TutiNavDiscord__title;
  const linkProps = { key: id, className: linkClass, href };
  return (
    <a {...linkProps}>
      <span className={titleClass}>{title}</span>
    </a>
  );
};

/**
 * Render a link element with provided props.
 * @param {object} Link - An object containing id and other props. @param
 * {string} Link.id - The id of the link element. @param {object} Link.props -
 * The props to apply to the link element. @returns {JSX.Element} - The rendered
 * link element.
 */
export const NavDiscordTuti: FC = () => {
  return (
    <div className={styles.TutiNavDiscord__gridContainer}>
      <section className={styles.TutiNavDiscord__gridNav}>
        <header className={styles.TutiNavDiscord__Header}>
          <TutiNavDropdown />
          <div className={styles.TutiNavDiscord__headerIng} />
        </header>
        <div className={styles.TutiNavDiscord__links}>
          {DataTutiNavDiscordLinks.map(renderLink)}
        </div>
        <div className={styles.TutiNavDiscord__controller}>
          <h2>Control</h2>
        </div>
      </section>
      <section className={styles.TutiNavDiscord__griBody}>
        {/* Renders the "page 404" component */}
        <Pag404 />
      </section>
    </div>
  );
};
