import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <input
      type="text"
      placeholder='Search'
      className={styles.input}
    />
  );
};

export default Search;