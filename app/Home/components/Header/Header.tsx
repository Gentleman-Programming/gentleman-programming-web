import { FC } from 'react';

import { ComillasAbrirIcon, ComillasCerrarIcon } from '@app/components';

import style from './styles/header.module.css';

export const Header: FC = () => {
  return (
    <header className={style.header__container}>
      <div className={style.div}>
        <div className={style.divContainer}>
          <h1 className={style.title}>Gentleman Programming Web.</h1>
          <h2 className={style.subtitle}>
            <ComillasAbrirIcon />
            &nbsp;Te carreo a senior, papu&nbsp;
            <ComillasCerrarIcon />
          </h2>
        </div>
        <iframe src="" width={'600px'} height={'300px'}></iframe>
      </div>
    </header>
  );
};
