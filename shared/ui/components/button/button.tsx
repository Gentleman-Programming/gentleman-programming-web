import { FC, ReactNode } from 'react';

import styles from './button.module.scss';
import { ButtonType, SizeType, VariantType } from '@/lambdas/types';

type Props = {
  type?: ButtonType;
  className?: string;
  variant?: VariantType;
  size?: SizeType;
  children: ReactNode;
  disabled?: boolean;
};
const Button: FC<Props> = ({
  type = 'button',
  className,
  variant = 'contained',
  size = 'auto',
  children,
  disabled = false,
}) => (
  <button
    type={type}
    className={`${styles.root} ${className} ${styles[variant]} ${styles[size]}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
