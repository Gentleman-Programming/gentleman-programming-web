import { FC } from 'react';

import style from './styles/body.module.css';

export const Body: FC = () => {
  return (
    <div className={style.body__container}>
      <h2 className={style.title}>Ultimo Contenido</h2>
      <div className={style.iframe_container}>
        <iframe
          width={'300'}
          height={'150'}
          src="https://www.youtube.com/embed/dHAZmECoqZ8"
          title="😱¡SIMULANDO TRABAJO REAL! Hacemos Pair Programming en COMUNIDAD + Pull Request &amp; Code Review | PT 1."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width={'300'}
          height={'150'}
          src="https://www.youtube.com/embed/5izwbm7fRMw"
          title="🔝¡El MEJOR editor de CÓDIGO para mí! Aprende a cómo INSTALAR LazyVim desde 0."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width={'300'}
          height={'150'}
          src="https://www.youtube.com/embed/BstBfqq7npY"
          title="Casos de uso y dominio en Clean Architecture: Diferencia lógica de negocios y aplicación 🚀💻 - PT 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
