import { FC, ReactNode } from 'react';

import styles from './styles/SocialLink.module.css';

interface Props {
  href: string;
  children: ReactNode;
  socialClass: string;
}

export const SocialLink: FC<Props> = ({
  href,
  children,
  socialClass,
}: Props) => {
  return (
    <a
      href={href}
      className={`${styles['profile-card-social__item']} ${styles[socialClass]}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles['icon-font']}>
        <span className={styles.icon}>{children}</span>
      </span>
    </a>
  );
};
