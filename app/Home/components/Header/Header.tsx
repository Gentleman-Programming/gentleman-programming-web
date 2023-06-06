import { FC } from 'react';

import {
  ComillasAbrirIcon,
  ComillasCerrarIcon,
  TutiIframe,
} from '@app/components';

import style from './styles/header.module.css';

export const Header: FC = () => {
  return (
    <header className={style.header__container}>
      <div className={style.header__div}>
        <div className={style.header__divContainer}>
          <h1 className={style.header__title}>Gentleman Programming Web</h1>
          <h2 className={style.header__subTitle}>
            <ComillasAbrirIcon />
            &nbsp;Te carreo a senior, papu&nbsp;
            <ComillasCerrarIcon />
          </h2>
        </div>
        <TutiIframe
          width={'600'}
          height={'300'}
          src="https://www.youtube.com/embed/KZCA_BRAkSA"
          title="Trailer Gentleman Programming"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </header>
  );
};
