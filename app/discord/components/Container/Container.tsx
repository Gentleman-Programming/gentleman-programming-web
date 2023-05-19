import { FC } from 'react';

import { InConstruction, NavBar } from '@app/components';

import style from './Container.module.css';

export const Container: FC = () => {
  return (
    <div className={style.discord__container}>
      <NavBar />
      <InConstruction />
    </div>
  );
};
