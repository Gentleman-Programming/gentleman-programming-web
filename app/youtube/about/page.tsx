import React from 'react';

import style from '@app/youtube/styles/channelAbout.module.css';

import { formatDate } from '../data/dateformatters';
import { dataAbout as data } from '../layout';

export default function About() {
  const viewCountFormatted = parseInt(data.viewCount).toLocaleString();
  return (
    <section className={style.aboutContainer}>
      <div className={style.aboutDescription}>
        <h3>Descripción</h3>
        <p>{data.description}</p>
      </div>
      <aside className={style.aboutAside}>
        <h3>Estadísticas</h3>
        <hr />
        <p>{`Se unió el ${formatDate(data.publishedAt)}`}</p>
        <hr />
        <p>{`${viewCountFormatted} vistas`}</p>
        <hr />
        <p>#ValePorUnLoguitoDeShare</p>
      </aside>
    </section>
  );
}
