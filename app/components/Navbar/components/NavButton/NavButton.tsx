/* `import { FC } from 'react';` */
import { FC } from 'react';

/* Importing various icons/components from the `@app/components` module. */
import {
  INavButtonProps,
  TutiNamePage,
  TutiNavButtonIcon,
} from '@app/components';

/*`import styles from './styles/navButton.module.css';` */
import styles from './styles/navButton.module.css';

/**
 * Renders a NavButton component.
 * @returns {JSX.Element} The rendered component.
 */
/**
 * Renders a NavButton component.
 * @returns {JSX.Element} The rendered component.
 */
export const NavButton: FC<INavButtonProps> = ({
  img,
  isLive,
  mentions,
  description,
  link,
}: INavButtonProps) => {
  const isLink = Boolean(link);
  const isSelected = description !== TutiNamePage({ linkPage: link ?? '/' });
  const isHome = description === '';
  const hasMentions = Boolean(mentions && mentions > 0);
  const target = isLink ? undefined : '_blank';
  const className = isLink ? styles.a : styles.button;
  const icon = TutiNavButtonIcon(img);
  const commonProps = {
    'data-selected': isSelected,
    'data-is-live': isLive,
    'data-has-mentions': hasMentions,
    'data-mentions': mentions,
    'data-is-home': isHome,
    className: className,
  };

  return isLink ? (
    <a {...commonProps} href={link} target={target}>
      {icon}
    </a>
  ) : (
    <button {...commonProps} type="button">
      {icon}
    </button>
  );
};
