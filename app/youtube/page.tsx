import '@app/styles/global.css';

import { TutiFooterFinal, TutiTop } from '@app/common';
import { NavBar } from '@app/components';

import HomeYoutube from './components/Home/HomeYoutube';
import style from './styles/youtube.module.css';
export const metadata = {
  title: 'GP -> YouTube',
  description: 'YouTube page',
};

export default function YouTube() {
  return (
    <div className={style.youtube__theme}>
      {/* Renders the navigation bar */}
      <NavBar />
      <section className={style.youtube__container}>
        {/* Renders the "In Construction" component */}
        <HomeYoutube />
      </section>
      {/* Render footer component */}
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
