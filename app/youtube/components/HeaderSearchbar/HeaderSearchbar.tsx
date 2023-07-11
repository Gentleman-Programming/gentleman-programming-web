import React from 'react';

import styles from '@app/youtube/styles/headerYoutube.module.css';

import { SearchIcon } from './SearchIcon';

export const HeaderSearchbar = () => {
  return (
    <header className={styles.youtube__searchbarSection}>
      <input
        id="YTsearch"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        className={styles.youtubeInputSearch}
        tabIndex={0}
        type="text"
        spellCheck="false"
        placeholder="Buscar"
        aria-label="Buscar"
        role="combobox"
        aria-haspopup="false"
        aria-autocomplete="list"
        dir="ltr"
      />
      <button className={styles.youtubeInputButton} type="submit">
        <SearchIcon />
      </button>
    </header>
  );
};
