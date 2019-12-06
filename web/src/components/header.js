import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import logo from '../assets/images/tbauctions.svg'
import styles from './header.module.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link activeClassName={styles.active} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/">About us</Link>
          </li>
          <li>
            <Link to="/projects/">Brands</Link>
          </li>
          <li>
            <Link to="/blog/">Careers</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
