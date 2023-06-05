/**
 * These lines of code are importing various
 * components and styles from different
 * files and modules.
 */

import { NavBar, TutiFooterFinal, TutiTop } from '@app/components';

import { Body, Footer, Header, PreFooter } from './components';
import style from './styles/page.module.css';

/**
 * Renders a home component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  return (
    <>
      {/* Render navigation bar*/}
      <NavBar />
      {/* Render  Home Container */}
      <div className={style.Home__container}>
        {/* Render header section */}
        <section className={style.Home__headerSection}>
          <Header />
        </section>
        {/* Render Body section */}
        <section className={style.Home__BodySection}>
          <Body />
        </section>
        {/* Render PreFooter section */}
        <section className={style.Home__PreFooterSection}>
          <PreFooter />
        </section>
        {/* Render Footer section */}
        <section className={style.Home__FooterSection}>
          <Footer />
        </section>
      </div>
      {/* Render Tuti footer Final section */}
      <TutiFooterFinal />
      {/* Render Tuti Top section */}
      <TutiTop />
    </>
  );
}
