import { FC } from 'react';

import styles from './styles/TutiNavDropdown.module.css';
import { TutiNavHeader } from '../TutiNavHeader';

export const TutiNavDropdown: FC = () => {
  const navDropdownItems = [
    { id: 1, text: 'Action' },
    { id: 2, text: 'Another action' },
    { id: 3, text: 'Something else here' },
    { id: 4, text: 'Link' },
  ];

  const server = 'Gentleman Programming';
  const navDropdownItem = ({ id, text }: { id: number; text: string }) => (
    <li key={id} className={styles.TutiNavDropdown__dropdownItem}>
      <span className={styles.TutiNavDropdown__dropdownTitle}>{text}</span>
    </li>
  );
  return (
    <label className={styles.TutiNavDropdown__dropdown}>
      <div className={styles.TutiNavDropdown__dropdownButton}>
        <TutiNavHeader title={server} />
      </div>
      <input
        type="checkbox"
        className={styles.TutiNavDropdown__dropdownInput}
      />
      <ul className={styles.TutiNavDropdown__dropdownMenu}>
        {navDropdownItems.map((item) => navDropdownItem(item))}
      </ul>
    </label>
  );
};
