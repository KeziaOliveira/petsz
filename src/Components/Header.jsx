import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Petsz from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <div className={styles.header}>
      <div></div>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} aria-label="Pets - Home" to="/">
          <Petsz />
        </Link>
        <Link className={styles.login} to="/Login">
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;
