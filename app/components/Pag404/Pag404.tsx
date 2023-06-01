import { FC } from 'react';

import pag404Img from '@app/assets/img/pag404.png';
import Image from 'next/image';

import style from './styles/pag404.module.css';

export const Pag404: FC = () => {
  return (
    <div className={style.pag404__container}>
      <h1 className={style.pag404__title}>Pagina no encontrada</h1>
      <Image className={style.pag404__img} src={pag404Img} alt="Pag 404" />
    </div>
  );
};
