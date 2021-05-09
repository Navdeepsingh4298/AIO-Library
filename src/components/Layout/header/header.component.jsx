import React from 'react';

// component
import SideDrawer from '../side-drawer/sidedrawer.component';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Link,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideDrawer />
          <Typography variant="h4" align="center" className={classes.title}>
            <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
              AIO Library
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

