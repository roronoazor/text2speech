import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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
  }));

  
export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Welcome to my React Text to Speech App
            </Typography>
            <Button color="inherit"><Link to="/" style={{color: "#fff", textDecoration:"none"}}>Home</Link></Button>
            <Button color="inherit"><Link to="/developer" style={{color: "#fff", textDecoration:"none"}}>developer</Link></Button>
            <Button color="inherit"><Link to="/help" style={{color: "#fff", textDecoration:"none"}}>About</Link></Button>
          </Toolbar>          
        </AppBar>
      </div>
    );
  }
