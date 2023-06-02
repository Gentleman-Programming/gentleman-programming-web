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
      <div className={style.div}>
        <div className={style.divContainer}>
          <h1 className={style.title}>Gentleman Programming Web.</h1>
          <h2 className={style.subtitle}>
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
