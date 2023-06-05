/* `import { FC } from 'react';` */
import { FC } from 'react';

/* `import style from './styles/isLive.module.css'; */
import style from './styles/isLive.module.css';
/**
 * Renders a isLive component.
 * @returns {JSX.Element} The rendered component.
 */
export const IsLive: FC = () => {
  return (
    /** This code is creating a `div` element with a class
     * name of `isLive__container`.
     * */
    <div className={style.isLive__container}>
      {/* Container for the "Is Live" message. */}
      <h1>Is Live</h1>
    </div>
  );
};
