import { ServerButton } from '@app/components';

import style from './navList.module.css';

export function NavList() {
  return (
    <div className={style.navList__container}>
      <ServerButton description="HM" link="https://google.com" img="HM" />
      <div className={style.navList__separador}></div>
      <ServerButton
        description="TW"
        link="https://google.com"
        isLive={true}
        img="TW"
      />
      <ServerButton description="DS" link="https://google.com" img="DS" />
      <ServerButton
        description="YT"
        link="https://google.com"
        img="YT"
        mentions={3}
      />
      <ServerButton description="TT" link="https://google.com" img="TT" />
      <ServerButton description="LK" link="https://google.com" img="LK" />
      <ServerButton description="GH" link="https://google.com" img="GH" />
      <ServerButton description="FB" link="https://google.com" img="FB" />
      <ServerButton description="IN" link="https://google.com" img="IN" />
      <ServerButton description="TK" link="https://google.com" img="TK" />
      <ServerButton description="SP" link="https://google.com" img="SP" />
      <ServerButton description="AP" link="https://google.com" img="AP" />
      <ServerButton description="BK" link="https://google.com" img="BK" />
      <ServerButton description="CT" link="https://google.com" img="CT" />
    </div>
  );
}
