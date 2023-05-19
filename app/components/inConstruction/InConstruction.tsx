import { FC } from 'react';

import inConstructionImg from '@app/assets/img/inConstruction.png';
import Image from 'next/image';

import style from './inConstruction.module.css';

export const InConstruction: FC = () => {
  return (
    <div className={style.inConstruction__container}>
      <h2 className={style.inConstruction__title}>Pagina en construcción</h2>
      <Image
        className={style.inConstruction__img}
        src={inConstructionImg}
        alt="In Construction"
      />
    </div>
  );
};
