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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = withStyles({
    root: {
      color: 'primary',
    },
    selected: {
      color: 'primary',
    },
  })(Tab);
  console.log(props.theme);

  return (
    <div data-aos="fade-up" className={styles.container}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
          <CustomTab label="Web Projects" {...a11yProps(0)} />
          <CustomTab label="App Projects " {...a11yProps(1)} />
          <CustomTab label="Others" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
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
