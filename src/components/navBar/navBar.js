import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBarStyles.scss';
import * as text from '../../constants/texts';
import ThemeChanger from '../themeChanger/themeChanger';

const getLogoSection = () => {
  return (
    <div className={styles.logoSectionContainer}>
      <Link to="/">
      {text.logo()}
      </Link>
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
        <li onClick={onClickAboutMe}>About Me</li>
        <li onClick={onClickProjects}>Projects</li>
        <li onClick={onClickSkills}>Skills</li>
      </ul>
    </nav>
  );
};

export default NavBar;
