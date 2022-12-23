import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaVimeo,
  FaPinterest,
} from 'react-icons/fa';

const links = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'blog',
    to: '/blog',
  },
  {
    name: 'shop',
    to: '/shop',
  },
  {
    name: 'video',
    to: '/video',
  },
];

const Nav = () => {
  const route = useLocation();
  return (
    <div className={styles.Nav}>
      <nav className={styles.nav}>
        <ul className={styles.social}>
          <li>
            <a href="https://github.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaTelegram />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaVimeo />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaPinterest />
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={route.pathname === link.to ? styles.active : ''}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
