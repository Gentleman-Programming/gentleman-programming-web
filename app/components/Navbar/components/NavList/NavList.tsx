import { FC } from 'react';

import { NavButton } from '@app/components';

import style from './styles/navList.module.css';

export const NavList: FC = () => {
  return (
    <div className={style.navList__container}>
      <NavButton description="HM" link="https://google.com" img="HM" />
      <div className={style.navList__separador}></div>
      <NavButton
        description="TW"
        link="https://google.com"
        isLive={true}
        img="TW"
      />
      <NavButton description="DS" link="https://google.com" img="DS" />
      <NavButton
        description="YT"
        link="https://google.com"
        img="YT"
        mentions={3}
      />
      <NavButton description="TT" link="https://google.com" img="TT" />
      <NavButton description="LK" link="https://google.com" img="LK" />
      <NavButton description="GH" link="https://google.com" img="GH" />
      <NavButton description="FB" link="https://google.com" img="FB" />
      <NavButton description="IN" link="https://google.com" img="IN" />
      <NavButton description="TK" link="https://google.com" img="TK" />
      <NavButton description="SP" link="https://google.com" img="SP" />
      <NavButton description="AP" link="https://google.com" img="AP" />
      <NavButton description="BK" link="https://google.com" img="BK" />
      <NavButton description="AM" link="https://google.com" img="AM" />
      <NavButton description="CT" link="https://google.com" img="CT" />
    </div>
  );
};
