import React from 'react';

import style from './body.module.css';

export const Body: React.FC = () => {
  return (
    <div className={style.body__container}>
      <h2 className={style.title}>Ultimo Contenido</h2>
      <div className={style.iframe_container}>
        <iframe src=""></iframe>
        <iframe src=""></iframe>
        <iframe src=""></iframe>
      </div>
    </div>
  );
};
