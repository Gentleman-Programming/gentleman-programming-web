/* `import { FC } from 'react';` */
import { FC } from 'react';

/* Importing an image file named "pag404.png" from the "assets/img" folder in the "@app" directory. */
import pag404Img from '@app/assets/img/pag404.png';
/* `import Image from 'next/image';` is importing the `Image` component from the `next/image` module.
This component is used to optimize and render images in Next.js applications. */
import Image from 'next/image';

/* `import style from './styles/pag404.module.css';` */
import style from './styles/pag404.module.css';

/**
 * Renders a Pag404 component.
 * @returns {JSX.Element} The rendered component.
 */
export const Pag404: FC = () => {
  return (
    // Renders a container div with a custom class
    <div className={style.pag404__container}>
      {/* Renders a title with custom class */}
      <h1 className={style.pag404__title}>Pagina no encontrada</h1>
      {/* Renders an image with custom class and alt text */}
      <Image className={style.pag404__img} src={pag404Img} alt="Pag 404" />
    </div>
  );
};
