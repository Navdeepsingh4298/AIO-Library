import React, { useState } from 'react';

import {
  List,
  Divider,
  Tooltip,
  ListItem,
  Link,
  Collapse,
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
import ReceiptIcon from '@material-ui/icons/Receipt';
import BuildIcon from '@material-ui/icons/Build';
import GridOnIcon from '@material-ui/icons/GridOn';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

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
        onOpen={() => { setOpen(true) }}
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
            <Link href="/" color="inherit" underline="none">
              AIO Library
            </Link>
          </Typography>
        </Toolbar>
        <Divider />
        <List className={classes.list}>
          <Link href="/register" underline="none">
            <ListItem alignItems='center' button >
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Sign Up/Register" />
            </ListItem>
          </Link>
          <Link href="/login" underline="none">
            <ListItem alignItems='center' button >
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Log In/Sign In" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/" underline="none">
            <ListItem alignItems='center' button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/news" underline="none">
            <ListItem alignItems='center' button>
              <ListItemIcon><ReceiptIcon /></ListItemIcon>
              <ListItemText primary="News" />
            </ListItem>
          </Link>
          <ListItem alignItems='center' button onClick={() => { setToolsOpen(!toolsOpen) }} >
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Tools" />
            {toolsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Link href="/tools/calculator" underline="none">
            <Collapse in={toolsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <GridOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Calculator" />
                </ListItem>
              </List>
            </Collapse>
          </Link>
          <Link href="/tools/converter" underline="none">
            <Collapse in={toolsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <SwapVerticalCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Converter" />
                </ListItem>
              </List>
            </Collapse>
          </Link>

          <Link href="/settings" underline="none">
            <ListItem alignItems='center' button >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/contact" underline="none">
            <ListItem alignItems='center' button>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Link>
          <Link href="/about" underline="none">
            <ListItem alignItems='center' button >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </Link>
          <Link href="/donate" underline="none">
            <ListItem alignItems='center' button>
              <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
              <ListItemText primary="Donate" />
            </ListItem>
          </Link>
        </List>
        <Divider />

      </SwipeableDrawer>
    </>

  )
}

export default SideDrawer