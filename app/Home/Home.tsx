import { FC } from 'react';

import { NavBar } from '@app/components';
// import { Header, Body, Footer, Prefooter } from '@app/Home';
import { Header, Body } from '@app/Home';
import { Container } from '@app/youtube/components';

import style from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={style.home__theme}>
      <NavBar />
      <Header />
      <Body />
      <Container />
      {/* <Prefooter />
      <Footer /> */}
    </div>
  );
};
