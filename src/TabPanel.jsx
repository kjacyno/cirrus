import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Projects from './Projects';
import About from './about';
import Contact from './Contact';


function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent:'center'}}>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary'>
          <Tab label="O NAS" {...a11yProps(0)} />
          <Tab label="PROJEKTY" {...a11yProps(1)} />
          <Tab label="KONTAKT " {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%' }}>
      <CustomTabPanel value={value} index={0}>
        <About/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Projects/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact/>
      </CustomTabPanel>
    </Box></>
  );
}
