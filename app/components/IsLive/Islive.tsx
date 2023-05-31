import { FC } from 'react';

import style from './styles/isLive.module.css';

export const IsLive: FC = () => {
  return (
    <div className={style.isLive__container}>
      <h1>Is Live</h1>
    </div>
  );
};
