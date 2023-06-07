/* `import { FC } from 'react';` is importing the `FC` type from the `react` module. `FC` stands for
Function Component and is a type that describes a React functional component that takes no props and
returns JSX. It is commonly used as a type for the `props` parameter in functional components. */
import { FC } from 'react';

/* Importing the `NavList` component from the `./components` module. */
import { NavList } from './components';
/* `import style from './styles/navBar.module.css';` */
import style from './styles/navBar.module.css';

/**
 * Renders a NavBar component.
 * @returns {JSX.Element} The rendered component.
 */
export const NavBar: FC = () => {
  return (
    /* This code is rendering a `div` element with a CSS class name of `navbar__container` */
    <div className={style.navbar__container}>
      {/* Render navigation bar */}
      <NavList />
    </div>
  );
};
