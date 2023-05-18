import { ServerButton } from '@app/components';

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
      />
      <div className={style.navList__separador}></div>
      <ServerButton
        description="Hola"
        selected={true}
        link="https://google.com"
        mentions={3}
      />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
      <ServerButton description="Hola" link="https://google.com" />
    </div>
  );
}
