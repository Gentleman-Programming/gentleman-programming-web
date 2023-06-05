/* Importing the `NavBar`, `TutiFooterFinal`, and `TutiTop` components from the `@app/components`
module. */
import { NavBar, TutiFooterFinal, TutiTop } from '@app/components';

import './@app/styles/golbal.css';
/* Importing the `Body`, `Footer`, `Header`, and `PreFooter` components from the `./components` directory. */
import { Body, Footer, Header, PreFooter } from './components';
/* `import style from './styles/page.module.css'. */
import style from './styles/page.module.css';

/**
 * Renders a home component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  return (
    <div className={style.home__theme}>
      {/* Renders the navigation bar */}
      <NavBar />
      {/* Render  Home Container */}
      <section className={style.home__container}>
        {/* Render header section */}
        <section className={style.home__headerSection}>
          <Header />
        </section>
        {/* Render Body section */}
        <section className={style.home__BodySection}>
          {/* Render Body component */}
          <Body />
        </section>
        <section className={style.home__PreFooterSection}>
          {/* Render Pre Footer component */}
          <PreFooter />
        </section>
        <section className={style.home__FooterSection}>
          {/* Render Footer component */}
          <Footer />
        </section>
      </section>
      {/* Render footer line final component */}
      <TutiFooterFinal />
      {/* Render back-to-top button */}
      <TutiTop />
    </div>
  );
}
