import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`text-center bg-info text-white pb-3 ${styles.header}`}>
      My First End To End Application
    </div>
  );
}

export default Header;
