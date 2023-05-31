import style from './styles/NavBar.module.css';
import { NavList } from '../NavList';

export const NavBar = () => {
  return (
    <div className={style.navbar__container}>
      <NavList />
    </div>
  );
};
