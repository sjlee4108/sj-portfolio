/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './projectSectionStyles.scss';
import ProjectBox from './projectBox';
import { projects } from '../../constants/projects';

const TabContents = (props) => {
  const { value, ...other } = props;
  const valToType = { 0: 'web', 1: 'app', 2: 'others' };
  const selectedType = valToType[value];
  return (
    <div className={styles.tabContentsContainer}>
    {projects.english.filter((p) => p.type === selectedType).map((project) => <ProjectBox {...other} project={project} />)}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProjectSection = (props) => {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const widthLimit = 700;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 const handleResize = (e) => {
   setWidth(window.innerWidth);
 };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);
    return window.addEventListener('resize', handleResize);
  }, []);

  const CustomTab = withStyles({
    root: {
      color: props.theme === 'light' ? 'primary' : '#b7e0e2cc',
    },
  })(Tab);

  return (
    <div data-aos="fade-up" className={styles.container}>
    <Box sx={{ width: '100%', display: 'flex', flexDirection: width < widthLimit ? 'column' : 'row' }}>
      <Box sx={{ borderRight: width < widthLimit ? 0 : 1, borderBottom: width < widthLimit ? 1 : 0, borderColor: props.theme === 'light' ? 'divider' : '#b7e0e266' }}>
        <Tabs
          orientation={width < widthLimit ? 'horizontal' : 'vertical'}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <CustomTab label="Web Projects" {...a11yProps(0)} />
          <CustomTab label="App Projects " {...a11yProps(1)} />
          <CustomTab label="Others" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabContents value={value} />
    </Box>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(stateToProps, {})(ProjectSection);
