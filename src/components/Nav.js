import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Logo from '../assets/PJ.png';
const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    textAlign: 'center',
    background: '#181818',
  },
  list: {
    position: 'relative',
    display: 'block',
    padding: '19px 19px 13px 19px',
  },
  toolbar: theme.mixins.toolbar,
  icon: {
    fontSize: '28px',
    color: '#686a6b',
    '&:hover': {
      color: '#66FCF1',
    },
  },
  customLogo: {
    margin: '30px 0 20px',
  },
  '@media (min-width: 1280px)': {
    marginTop: theme.spacing(5),
    backgroundColor: 'red',
  },
}));

const navData = [
  {
    href: '#home',
    hint: 'Home',
    icon: 'home',
    current: 'current',
  },
  {
    href: '#about',
    hint: 'About',
    icon: 'person',
  },
  {
    href: '#skill',
    hint: 'Skills',
    icon: 'settings',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'code',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'Instagram',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'Telegram',
  },
];

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <img
          className={classes.customLogo}
          alt="logo"
          style={{ width: '50px' }}
          src={Logo}
        />
      </div>
      <Divider />
      <List>
        {navData.map((text, index) => (
          <ListItem className={classes.list} button key={index}>
            <ListItemIcon>
              <Icon className={classes.icon}>{text.icon}</Icon>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
