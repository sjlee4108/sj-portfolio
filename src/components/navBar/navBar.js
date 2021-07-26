import React from 'react';
import styles from './navBarStyles.scss';
import * as text from '../../constants/texts';

const getLogoSection = () => {
  return (
    <div>
      {text.logo}
    </div>
  );
};
const NavBar = () => {
  return (
    <nav className={styles.navBarStyle}>
      {getLogoSection()}
      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </nav>
  );
};

export default NavBar;
