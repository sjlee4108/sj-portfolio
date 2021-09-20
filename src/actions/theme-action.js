import ActionTypes from './types';

const setDarkCSS = () => {
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
    bodyStyles.setProperty('--theme-monitor-color', 'darkslategray');
    bodyStyles.setProperty('--theme-monitor-text-color', 'lightyellow');
    bodyStyles.setProperty('--theme-monitor-top-color', 'rgb(20, 20, 40)');
  };

  const setLightCSS = () => {
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
    bodyStyles.setProperty('--theme-monitor-top-color', 'rgb(190, 190, 190)');
    bodyStyles.setProperty('--theme-monitor-text-color', 'gray');
    bodyStyles.setProperty('--theme-monitor-color', 'rgb(220, 220, 220)');
  };

export function setDark() {
    setDarkCSS();
    return {
        type: ActionTypes.SETDARKMODE,
        payload: null,
    };
}

export function setLight() {
    setLightCSS();
    return {
        type: ActionTypes.SETLIGHTMODE,
        payload: null,
    };
}
