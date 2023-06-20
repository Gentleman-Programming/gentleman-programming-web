/* Importing the `FC` type from the `react` module. */
import { FC } from 'react';

/* Importing three components (`ComillasAbrirIcon`, `ComillasCerrarIcon`, and `TutiIframe`) from the
`@app/components` module. */
import { TutiIframe } from '@app/common';
import { ComillasAbrirIcon, ComillasCerrarIcon } from '@app/components';

/* `import style from './styles/header.module.css' */
import style from './styles/header.module.css';
/**
 * Renders a Header component.
 * @returns {JSX.Element} The rendered component.
 */
export const Header: FC = () => {
  return (
    /* Renders a Header component. */
    <header className={style.header__container}>
      <div className={style.header__div}>
        <div className={style.header__divContainer}>
          <h1 className={style.header__title}>Gentleman Programming Web</h1>
          <h2 className={style.header__subTitle}>
            <ComillasAbrirIcon />
            &nbsp;Te carreo a senior, papu&nbsp;
            <ComillasCerrarIcon />
          </h2>
        </div>
        <TutiIframe
          width={'600'} /* The width of the iframe. */
          height={'300'} /* The height of the iframe. */
          src="https://www.youtube.com/embed/KZCA_BRAkSA" /* The URL of the iframe. */
          title="Trailer Gentleman Programming" /* The title of the iframe. */
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" /* The allowed features of the iframe. */
          allowFullScreen /* The full screen mode of the iframe. */
        />
      </div>
    </header>
  );
};
