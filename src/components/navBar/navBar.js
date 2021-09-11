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
const NavBar = (props) => {
  const { onClickAboutMe, onClickProjects, onClickSkills } = props;
  return (
    <nav className={styles.navBarStyle}>
      {getLogoSection()}
      <ul>
        <li><ul onClick={onClickAboutMe}>About Me</ul></li>
        <li><ul onClick={onClickProjects}>Projects</ul></li>
        <li><ul onClick={onClickSkills}>Skills</ul></li>
      </ul>
    </nav>
  );
};

export default NavBar;
