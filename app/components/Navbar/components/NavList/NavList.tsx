import { ServerButton } from 'app/components';

import style from './navList.module.css';

export function NavList() {
  return (
    <div className={style.navList__container}>
      <ServerButton
        description="Hola"
        link="https://google.com"
        mentions={3}
        isHome={true}
        isLive={true}
        img="GP"
      />
      <div className={style.navList__separador}></div>
      <ServerButton
        description="Hola"
        selected={true}
        link="https://google.com"
        mentions={3}
        img="TW"
      />
      <ServerButton description="Hola" link="https://google.com" img="DS" />
      <ServerButton description="Hola" link="https://google.com" img="YT" />
      <ServerButton description="Hola" link="https://google.com" img="TT" />
      <ServerButton description="Hola" link="https://google.com" img="LK" />
      <ServerButton description="Hola" link="https://google.com" img="GH" />
      <ServerButton description="Hola" link="https://google.com" img="IN" />
      <ServerButton description="Hola" link="https://google.com" img="SP" />
      <ServerButton description="Hola" link="https://google.com" img="TK" />
    </div>
  );
}
