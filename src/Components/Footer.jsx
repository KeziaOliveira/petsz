import React from 'react';
import styles from './Footer.module.css';
import PetszFoot from '../Assets/dogs-footer.svg?react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <PetszFoot style={{ margin: '3rem auto 0 auto' }} />
      <p>Feito com amor por Kezia</p>
    </footer>
  );
}

export default Footer;
