import React from 'react';
import {AppBar,Toolbar,Typography, makeStyles} from '@material-ui/core';
import CreateDialog from '../exersice/Dialog/Create';

const userStyle = makeStyles(()=> ({
  headling:{
    flex:1
  }
}))

const Header = () => {
  const classes = userStyle();
    return (
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h5" className={classes.headling} >
        university of KELANIYA
      </Typography>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button> */}
        <CreateDialog/>
      </Toolbar>
    </AppBar>
    )
}

export default Header;
