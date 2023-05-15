import { ServerButton } from '../NavButton';

import style from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={style.nav}>
      <ServerButton
        description="Hola"
        link="https://google.com"
        mentions={3}
        isLive={true}
      />
    </div>
  );
};
