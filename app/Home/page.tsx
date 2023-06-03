import { FC } from 'react';

import { NavBar, TutiTop } from '@app/components';

import { Body, Footer, Header, PreFooter } from './components';
import style from './styles/page.module.css';

export const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className={style.HomeContainer}>
        <header>
          <Header />
        </header>
        <Body />
        <PreFooter />
        <Footer />
      </div>
      <TutiTop />
    </>
  );
};
