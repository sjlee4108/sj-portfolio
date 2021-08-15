import React from 'react';
import styles from './navBarStyles.scss';
import * as text from '../../constants/texts';
import ThemeChanger from '../themeChanger/themeChanger';

const getLogoSection = () => {
  return (
    <div className={styles.logoSectionContainer}>
      {text.logo}
      <ThemeChanger />
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
