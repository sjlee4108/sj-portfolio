import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import styles from './themeChangerStyles.scss';

const setDark = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', '#b7e0e2');
  bodyStyles.setProperty('--theme-page-background', '#2a3638');
  bodyStyles.setProperty('--theme-room-background', '#253031');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(34, 34, 34, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'rgb(80, 80, 80)');
  bodyStyles.setProperty('--theme-slider-background-1', 'rgb(55, 60, 55)');
  bodyStyles.setProperty('--theme-slider-background-2', '#1f292a');
  bodyStyles.setProperty('--theme-skill-background', '#1f292a');
  bodyStyles.setProperty('--theme-object-opacity', '0.7');
  bodyStyles.setProperty('--theme-light-color', 'rgba(255, 255, 255, 0.3)');
  bodyStyles.setProperty('--theme-bulb-color', 'white');
};

const setLight = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', 'rgb(0, 0, 70)');
  bodyStyles.setProperty('--theme-page-background', '#e1f4ff');
  bodyStyles.setProperty('--theme-room-background', '#d6f0ff');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(240, 248, 255, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'whitesmoke');
  bodyStyles.setProperty('--theme-slider-background-2', 'rgb(240, 255, 255)');
  bodyStyles.setProperty('--theme-slider-background-1', 'rgb(245, 250, 250)');
  bodyStyles.setProperty('--theme-skill-background', 'rgb(245, 255, 255)');
  bodyStyles.setProperty('--theme-object-opacity', '1');
  bodyStyles.setProperty('--theme-light-color', 'rgba(0, 0, 0, 0)');
  bodyStyles.setProperty('--theme-bulb-color', 'lightgray');
};

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    if (!themeState) {
      localStorage.setItem('Theme', 'dark');
      setDark();
    } else {
      localStorage.setItem('Theme', 'light');
      setLight();
    }
    setThemeState(!themeState);
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
      setDark();
    } else {
      setLight();
    }
  }, []);

  return (
    <div className={styles.themeChangeContainer}>
      <Switch
        onKeyPress={handleChange}
        onChange={handleChange}
        checked={themeState}
        onColor="#222"
        offColor="#ddd"
        onHandleColor="#444"
        uncheckedIcon={false}
        checkedIcon={false}
        height={25}
        width={50}
        checkedHandleIcon={<RiMoonClearLine style={{ display: 'flex', margin: '4px', width: 'calc(100% - 8px)', height: 'calc(100% - 8px)', alignItems: 'center', justifyContent: 'center' }} />}
        uncheckedHandleIcon={<RiSunLine style={{ display: 'flex', margin: '4px', width: 'calc(100% - 8px)', height: 'calc(100% - 8px)', alignItems: 'center', justifyContent: 'center' }} />}
        activeBoxShadow={themeState ? '0 0 2px 3px currentColor' : '0 0 2px 3px #DDDD00'}
      />
      <small>{themeState ? 'Dark Mode' : 'Light Mode'}</small>
    </div>
  );
};

export default ThemeChanger;
