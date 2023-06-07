import '@app/styles/global.css';

import {
  InConstruction,
  NavBar,
  TutiFooterFinal,
  TutiTop,
} from '@app/components';

import style from './styles/page.module.css';
export const metadata = {
  title: 'GP -> YouTube',
  description: 'YouTube page',
};

export default function Discord() {
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
