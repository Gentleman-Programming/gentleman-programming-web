/* Importing the `FC` type from the `react` module.*/
import { FC } from 'react';

/* Importing the `NavButton` component from the `@app/components` module. */
import { NavButton } from '@app/components';

/* `import style from './styles/navList.module.css';`  */
import style from './styles/navList.module.css';

/**
 * Renders a NavList component.
 * @returns {JSX.Element} The rendered component.
 */
export const NavList: FC = () => {
  return (
    // Container for the NavList component
    <div className={style.navList__container}>
      {/* Navigation button for Home */}
      <NavButton description="" link="/" img="Home" />
      {/* Separator between navigation buttons */}
      <div className={style.navList__separador}></div>
      {/* Navigation button for Twitch */}
      <NavButton
        description="twitch" // description
        link="/twitch" // link
        isLive={true} // isLive
        img="Twitch" // img
      />
      {/* Navigation button for Discord */}
      <NavButton
        description="discord" // description
        link="/discord" // link
        img="Discord" // img
      />
      {/* Navigation button for YouTube */}
      <NavButton
        description="youtube" // description
        link="/youtube" // link
        img="YouTube" // img
        mentions={3} // mentions
      />
      {/* Navigation button for Linkedin */}
      <NavButton
        description="linkedin" // description
        link="/linkedin" // link
        img="LinkedIn" // img
      />
      {/* Navigation button for Book */}
      <NavButton
        description="book" // description
        link="https://gentleman-programming-book.vercel.app/es" // link
        img="Book" // img
      />
      {/* Navigation button for Contact */}
      <NavButton
        description="contact" // description
        link="/contact" // link
        img="Contact" // img
      />
    </div>
  );
};
