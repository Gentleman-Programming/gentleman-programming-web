import { NavList } from './components';
import style from './styles/navBar.module.css';

export const NavBar = () => {
  return (
    <div className={style.navbar__container}>
      <NavList />
    </div>
  );
};
