import { FC } from 'react';

import { NavBar } from '@app/components';

import { HomeContainer } from './components';
import style from './styles/page.module.css';

export const Home: FC = () => {
  return (
    <div className={style.home__theme}>
      <NavBar />
      <HomeContainer />
    </div>
  );
};
