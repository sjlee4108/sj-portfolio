import React, { useEffect } from 'react';
import Switch from 'react-switch';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { setDark, setLight } from '../../actions';
import styles from './themeChangerStyles.scss';

const ThemeChanger = (props) => {
  const handleChange = () => {
    if (props.theme === 'light') {
      localStorage.setItem('Theme', 'dark');
      props.setDark();
    } else {
      localStorage.setItem('Theme', 'light');
      props.setLight();
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      props.setDark();
    } else {
      props.setLight();
    }
  }, []);

  return (
    <div className={styles.themeChangeContainer}>
      <Switch
        onKeyPress={handleChange}
        onChange={handleChange}
        checked={props.theme === 'dark'}
        onColor="#222"
        offColor="#ddd"
        onHandleColor="#444"
        uncheckedIcon={false}
        checkedIcon={false}
        height={25}
        width={50}
        checkedHandleIcon={<RiMoonClearLine style={{ display: 'flex', margin: '4px', width: 'calc(100% - 8px)', height: 'calc(100% - 8px)', alignItems: 'center', justifyContent: 'center' }} />}
        uncheckedHandleIcon={<RiSunLine style={{ display: 'flex', margin: '4px', width: 'calc(100% - 8px)', height: 'calc(100% - 8px)', alignItems: 'center', justifyContent: 'center' }} />}
        activeBoxShadow={props.theme === 'dark' ? '0 0 2px 3px currentColor' : '0 0 2px 3px #DDDD00'}
      />
      <small>{props.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</small>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(stateToProps, { setLight, setDark })(ThemeChanger);
