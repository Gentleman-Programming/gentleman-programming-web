import { FC } from 'react';

import style from './styles/header.module.css';

export const Header: FC = () => {
  return (
    <header className={style.header__container}>
      <div className={style.div}>
        <h1 className={style.title}>Gentleman Programming Web.</h1>
        <iframe src="" width={'600px'} height={'300px'}></iframe>
      </div>
    </header>
  );
};
