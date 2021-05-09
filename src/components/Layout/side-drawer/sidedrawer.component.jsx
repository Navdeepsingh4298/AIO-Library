import React, { useState } from 'react';

import {
  List,
  Divider,
  Tooltip,
  ListItem,
  Link,
  Typography,
  Toolbar,
  IconButton,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Material ui icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  toolbar: {
    backgroundColor: '#f4c529',
  },
}));

const SideDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Menu">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open menu drawer"
          onClick={() => { setOpen(!open) }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => { setOpen(false) }}
        onOpen={() => { }}
      >

        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open menu drawer"
            onClick={() => { setOpen(!open) }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4" align="center" className={classes.title}>
            <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
              AIO Library
            </Link>
          </Typography>
        </Toolbar>
        <Divider />
        <List className={classes.list}>
          <Link href="/register" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Sign Up/Register" />
            </ListItem>
          </Link>
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Log In/Sign In" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="#features" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="Features" />
            </ListItem>
          </Link>
          <Link href="/tools" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText primary="Tools" />
            </ListItem>
          </Link>
          <Link href="/settings" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button onClick={() => { }}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <ListItem alignItems='center' button>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Link>
        </List>

      </SwipeableDrawer>

    </>

  )
}

export default SideDrawer
