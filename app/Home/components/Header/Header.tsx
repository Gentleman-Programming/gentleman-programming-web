import { FC } from 'react';

import style from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={style.header__container}>
      <h1 className={style.title}>Web de Gentleman Programming</h1>
      <div className={style.div}>
        <iframe src="" width={'600px'} height={'300px'}></iframe>
        <p className={style.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
          perspiciatis officia commodi nulla magnam illum, quae nihil ab, ea
          ducimus! Alias laborum vel ipsum aliquam voluptatibus, doloribus iusto
          eos.
        </p>
      </div>
    </header>
  );
};
