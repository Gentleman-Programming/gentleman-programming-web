import React from 'react';

import { IChannelAbout } from '@app/youtube/interfaces/channelAbout';

export default function About({ data }: { data: IChannelAbout }) {
  return (
    <section>
      <h3>Descripción</h3>
      {data.description}
      <aside>
        <h3>Estadísticas</h3>
        <p>{`Se unió el ${data.publishedAt}`}</p>
        <p>{`${data.viewCount} vistas`}</p>
      </aside>
    </section>
  );
}
