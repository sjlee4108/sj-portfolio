import React, { useState, useEffect } from 'react';

const setDark = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', 'white');
  bodyStyles.setProperty('--theme-page-background', 'rgb(34, 34, 34)');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(34, 34, 34, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'rgb(80, 80, 80)');
};

const setLight = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', 'black');
  bodyStyles.setProperty('--theme-page-background', 'rgb(240, 248, 255)');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(240, 248, 255, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'whitesmoke');
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
    <div>
      <button type="button" onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default ThemeChanger;
