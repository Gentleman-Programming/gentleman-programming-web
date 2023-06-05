/* `import { FC } from 'react';` */
import { FC } from 'react';

/* `import inConstructionImg from '@app/assets/img/inConstruction.png';` */
import inConstructionImg from '@app/assets/img/inConstruction.png';
/* `import Image from 'next/image';`  */
import Image from 'next/image';

/* `import style from './styles/inConstruction.module.css';` */
import style from './styles/inConstruction.module.css';

/**
 * Renders a InConstruction component.
 * @returns {JSX.Element} The rendered component.
 */
export const InConstruction: FC = () => {
  return (
    /** This code is creating a `div` element with a `className`
     * attribute set to `style.inConstruction__container`.
     * */
    <div className={style.inConstruction__container}>
      {/* Title of the under construction page */}
      <h2 className={style.inConstruction__title}>Pagina en construcción</h2>
      {/* Image to display on the under construction page */}
      <Image
        className={style.inConstruction__img} // set class name for styling
        src={inConstructionImg} // set image source
        alt="In Construction" // set image alt
      />
    </div>
  );
};
