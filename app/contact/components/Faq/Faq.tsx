import { FC } from 'react';

import { ListItem } from './components';
import { FAQ } from './components/ListItem/data';

export const Faq: FC = () => {
  return (
    <div>
      <h2
        style={{
          color: 'white',
          alignContent: 'center',
        }}
      >
        ¿Tienes alguna pregunta?
      </h2>
      <ListItem questionList={FAQ} />
    </div>
  );
};
