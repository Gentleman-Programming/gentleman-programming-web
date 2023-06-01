import { FC } from 'react';

import { ListItem } from './components';
import { FAQ } from './components/ListItem/data';

export const Faq: FC = () => {
  return (
    <div>
      <h1
        style={{
          color: 'white',
        }}
      >
        ¿Tienes alguna pregunta?
      </h1>
      <ListItem questionList={FAQ} />
    </div>
  );
};
