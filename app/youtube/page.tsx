import '@app/styles/global.css';

import { TutiFooterFinal, TutiTop } from '@app/common';
import { InConstruction, NavBar } from '@app/components';

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
        <InConstruction />
      </section>
      {/* Render footer component */}
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
