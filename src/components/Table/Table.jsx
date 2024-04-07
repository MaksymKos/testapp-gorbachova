import React from 'react'
import { data } from './data'
import Search from '../SearchInput/Search'
import Pagination from '../Pagination/Pagination'

import styles from './Table.module.scss'

const Table = () => {
  return (
    <div className={styles.main}>
      <h3 className={styles.main__title}>Hello Evano 👋🏼,</h3>
      <section className={styles.container}>
        <section className={styles.container__top}>
          <div>
            <h5 className={styles.container__top__title}>All Customers</h5>
            <span className={styles.container__top__subtitle}>Active Members</span>
          </div>
          <Search />
        </section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__head__item}>Customer Name</th>
              <th className={styles.table__head__item}>Company</th>
              <th className={styles.table__head__item}>Phone Number</th>
              <th className={styles.table__head__item}>Email</th>
              <th className={styles.table__head__item}>Country</th>
              <th className={styles.table__head__item}>Staus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td className={styles.table__body__item}>{person.name}</td>
                <td className={styles.table__body__item}>{person.company}</td>
                <td className={styles.table__body__item}>{person.phone}</td>
                <td className={styles.table__body__item}>{person.email}</td>
                <td className={styles.table__body__item}>{person.country}</td>
                <td className={styles.table__body__item}
                >
                  <span className={`
                  ${person.status === 'Active' ? styles.table__body__item_status_active : styles.table__body__item_status_inactive}
                  `}
                  >
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.table__foot}>
          <span className={styles.table__foot_text}>Showing data from 1 to 8 of 256K entries</span>
          <Pagination />
        </div>
      </section>
      <section className={styles.container_mobile}>
        <section className={styles.container__top}>
          <div>
            <h5 className={styles.container__top__title}>All Customers</h5>
            <span className={styles.container__top__subtitle}>Active Members</span>
          </div>
          <Search />
        </section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__head__item}>Customer Name</th>
              <th className={styles.table__head__item}>Phone Number</th>
              <th className={styles.table__head__item}>Staus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td className={styles.table__body__item}>{person.name}</td>
                <td className={styles.table__body__item}>{person.phone}</td>
                <td className={styles.table__body__item}
                >
                  <span className={`
                  ${person.status === 'Active' ? styles.table__body__item_status_active : styles.table__body__item_status_inactive}
                  `}
                  >
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.table__foot}>
          <span className={styles.table__foot_text}>Showing data from 1 to 8 of 256K entries</span>
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default Table;