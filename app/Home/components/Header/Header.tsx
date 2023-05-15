import { FC } from 'react';

import style from './header.module.css';

export const Header: FC = () => {
  return (
    <div className={style.header__text}>
      <h1>Web de Gentleman Programming</h1>
    </div>
  );
};
