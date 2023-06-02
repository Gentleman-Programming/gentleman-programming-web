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
      <NavButton description="LK" link="https://google.com" img="LK" />
      <NavButton description="BK" link="https://google.com" img="BK" />
      <NavButton description="CT" link="https://google.com" img="CT" />
    </div>
  );
};
