import React from 'react'
import logo from '../../assets/logo.svg'
import user from '../../assets/Ellipse.svg'

import './Navbar.scss';

const Navbar = () => {
  return (
    <section className='navbar'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="aside__item_main">
            <img src={logo} alt="logo" className='aside__title_logo' />
            <span className='aside__title_text'>Dashboard <span className='aside__title_subtext'>v.01</span></span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Income</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promote</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
            <div className='aside__user'>
              <img src={user} alt="user" className='aside__user__icon' />
              <div className="aside__user__text">
                <span className='aside__user_name'>Evano</span>
                <span className='aside__user_role'>Project Manager</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar