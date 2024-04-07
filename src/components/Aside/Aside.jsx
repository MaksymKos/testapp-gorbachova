import React from 'react'
import logo from '../../assets/logo.svg'
import dashboard from '../../assets/menu-dashboard.svg'
import product from '../../assets/menu-product.svg'
import customers from '../../assets/menu-customers.svg'
import income from '../../assets/menu-income.svg'
import promote from '../../assets/menu-promote.svg'
import help from '../../assets/menu-help.svg'
import arrow from '../../assets/menu-arrow.svg'
import user from '../../assets/Ellipse.svg'

import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <div className={styles.aside}>
      <h3 className={styles.aside__title}>
        <img src={logo} alt="logo" className={styles.aside__title_logo} />
        <span className={styles.aside__title_text}>Dashboard <span className={styles.aside__title_subtext}>v.01</span></span>
      </h3>
      <div className={styles.aside__main}>
        <ul className={styles.aside__list}>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={dashboard} alt="menu-dashboard" className={styles.aside__item_icon} />
              <span>Dashboard</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={product} alt="menu-dashboard" />
              <span>Product</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={customers} alt="menu-dashboard" className={styles.aside__item_icon} />
              <span>Customers</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={income} alt="menu-dashboard" />
              <span>Income</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={promote} alt="menu-dashboard" />
              <span>Promote</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
          <li className={styles.aside__item}>
            <div className={styles.aside__item_main}>
              <img src={help} alt="menu-dashboard" />
              <span>Help</span>
            </div>
            <img src={arrow} alt="menu-arrow" className={styles.aside__item_arrow} />
          </li>
        </ul>
        <div className={styles.aside__user}>
          <img src={user} alt="user" className={styles.aside__user__icon} />
          <div className={styles.aside__user__text}>
            <span className={styles.aside__user_name}>Evano</span>
            <span className={styles.aside__user_role}>Project Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;