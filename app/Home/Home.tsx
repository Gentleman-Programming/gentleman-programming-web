import { FC } from 'react';

import { NavBar } from '@page/components';
import { Header, Body, Prefooter, Footer } from '@page/Home';

import style from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={style.home__theme}>
      <NavBar />
      <Header />
      <Body />
      <Prefooter />
      <Footer />
    </div>
  );
};
