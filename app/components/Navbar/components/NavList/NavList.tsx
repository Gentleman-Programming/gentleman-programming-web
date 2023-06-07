/* Importing the `FC` type from the `react` module.*/
import { FC } from 'react';

/* Importing the `NavButton` component from the `@app/components` module. */
import { NavButton, NavButtonData, TutiToolTip } from '@app/components';

/* `import style from './styles/navList.module.css';`  */
import style from './styles/navList.module.css';

/**
 * Renders a NavList component.
 * @returns {JSX.Element} The rendered component.
 */
export const NavList: FC = () => {
  return (
    <div className={style.navList__container}>
      {NavButtonData.map(
        ({ id, description, toolTip, link, isLive, img, mentions }) => (
          <TutiToolTip key={id} id={id} description={toolTip}>
            <NavButton
              description={description}
              link={link}
              isLive={isLive}
              img={img}
              mentions={mentions}
              key={id}
            />
          </TutiToolTip>
        )
      )}
    </div>
  );
};
