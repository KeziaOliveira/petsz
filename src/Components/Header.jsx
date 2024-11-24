import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Petsz } from '../Assets/adicionar.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">
          <Petsz />
        </Link>
        <Link to="/Login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
