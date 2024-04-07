import React from 'react';
import styles from './Pagination.module.scss';

const data = ['<', '1', '2', '3', '4', '...', '40', '>']

const Pagination = () => {
  return (
    <div className={styles.pagination__list}>
      {data.map(item => (
        <span key={item} className={item === '...' ? '' : `${styles.pagination__item}`}>{item}</span>
      ))}
    </div>
  );
};

export default Pagination;