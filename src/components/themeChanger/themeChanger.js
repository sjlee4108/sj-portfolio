import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { setDark, setLight } from '../../actions';
import styles from './themeChangerStyles.scss';

const ThemeChanger = (props) => {
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

const stateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(stateToProps, {})(ThemeChanger);
