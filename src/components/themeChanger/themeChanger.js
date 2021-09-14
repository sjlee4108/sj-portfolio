import React, { useState, useEffect } from 'react';

const setDark = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', '#b7e0e2');
  bodyStyles.setProperty('--theme-page-background', '#2a3638');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(34, 34, 34, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'rgb(80, 80, 80)');
  bodyStyles.setProperty('--theme-slider-background-1', 'rgb(20, 20, 20)');
  bodyStyles.setProperty('--theme-slider-background-2', 'rgb(45, 45, 40)');
  bodyStyles.setProperty('--theme-skill-background', '#1f292a');
};

const setLight = () => {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--theme-color', 'rgb(0, 0, 80)');
  bodyStyles.setProperty('--theme-page-background', '#e1f4ff');
  bodyStyles.setProperty('--theme-navbar-background', 'rgba(240, 248, 255, 0.9)');
  bodyStyles.setProperty('--theme-section-background', 'whitesmoke');
  bodyStyles.setProperty('--theme-slider-background-1', 'rgb(245, 245, 255)');
  bodyStyles.setProperty('--theme-slider-background-2', 'rgb(245, 255, 255)');
  bodyStyles.setProperty('--theme-skill-background', 'rgb(245, 255, 255)');
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
