/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './projectSectionStyles.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
    return window.addEventListener('resize', handleResize);
  }, []);

  const CustomTab = withStyles({
    root: {
      color: props.theme === 'light' ? 'primary' : '#b7e0e2cc',
    },
  })(Tab);

  return (
    <div data-aos="fade-up" className={styles.container}>
    <Box sx={width < widthLimit ? { width: '100%' } : { height: '100%', display: 'flex', flexDirection: 'row' }}>
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
      <TabPanel value={value} index={0}>
        {width}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
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
