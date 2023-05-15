import { FC } from 'react';

import { NavBar } from '@page/components';
import { Footer, Header, Prefooter } from '@page/Home';

import style from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={style.root}>
      <Header />
      <NavBar />
      <Prefooter />
      <Footer />
    </div>
  );
};
