import { ITutiToolTipProps } from './interface';
import styles from './styles/TutiToolTip.module.css';

export const TutiToolTip: React.FC<ITutiToolTipProps> = ({
  id,
  children,
  description,
}: ITutiToolTipProps) => {
  const TutiToolTipProps = {
    id: id,
    className: `${styles.TutiToolTip__tooltip}`,
    'aria-describedby': id,
    role: 'tooltip',
  };

  return (
    <p {...TutiToolTipProps}>
      {children}
      <span className={styles.TutiToolTip__tooltiptext}>{description}</span>
    </p>
  );
};
