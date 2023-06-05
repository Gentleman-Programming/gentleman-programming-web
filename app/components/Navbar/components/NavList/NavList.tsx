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
      {/* Navigation button for HM */}
      <NavButton description={'HM'} link="https://google.com" img="HM" />
      {/* Separator between navigation buttons */}
      <div className={style.navList__separador}></div>
      {/* Navigation button for TW */}
      <NavButton
        description={'TW'} // description
        link="https://google.com" // link
        isLive={true} // isLive
        img="TW" // img
      />
      {/* Navigation button for DS */}
      <NavButton
        description={'DS'} // description
        link="https://google.com" // link
        img="DS" // img
      />
      {/* Navigation button for YT */}
      <NavButton
        description={'YT'} // description
        link="https://google.com" // link
        img="YT" // img
        mentions={3} // mentions
      />
      {/* Navigation button for LK */}
      <NavButton
        description={'LK'} // description
        link="https://google.com" // link
        img="LK" // img
      />
      {/* Navigation button for BK */}
      <NavButton
        description={'BK'} // description
        link="https://google.com" // link
        img="BK" // img
      />
      {/* Navigation button for CT */}
      <NavButton
        description={'CT'} // description
        link="https://google.com" // link
        img="CT" // img
      />
    </div>
  );
};
