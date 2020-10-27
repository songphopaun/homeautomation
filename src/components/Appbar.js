import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Drawer, Menu, MenuItem, CssBaseline} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import clsx from 'clsx'

import { BrowserRouter as Route,Switch,Link} from 'react-router-dom';
import Menubar from './Menubar'
<<<<<<< HEAD
import Account from './Account'
=======
// import Account from './Account'
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
import Home from './Home'
import Aboutme from './Aboutme'
// import DHT11 from '../data/DHT11'


const useStyles = makeStyles((theme) => ({
    appbar:{
        background : '#f4f3ef',
        fontFamily : 'Nunito',
        borderBottom:'1px solid #ddd',
    },
    appbarShift: {
        width: `calc(100% - ${230}px)`,
        marginLeft: '230px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down("sm")]:{
          width: `calc(100% - ${50}px)`,
        }
      },
    appbarTitle:{
        flexGrow: 1,
        color: '#555555',
        fontSize : '1rem',
        textTransform:"uppercase"
    },
    icon:{
        color: '#555555',
        fontSize: '1.5rem',
    },
    menuDropdowm:{
        position:'relative',
        marginTop:'35px',
        float:'right'
    },
    hide:{
        display:'none'
    },
    content:{
        flexGrow: 1,
        padding: theme.spacing(3),

        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
    },
    contentShift: {
        width: `calc(100% - ${230}px)`,
        marginLeft: '230px',
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.down("sm")]:{
          width: `calc(100% - ${50}px)`,
          marginLeft: '50px',
        }
      },
      drawerHeader: {
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
}));

export default function Appbar() {
  const classes = useStyles();

  const [open , setOpen] = useState(false)

  const handleDrawerOpen =()=>{
      setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <CssBaseline/>
            <AppBar 
                position="fixed"
                className={clsx(classes.appbar, {
                    [classes.appbarShift]: open
                })}
                elevation={0}
            >
                <Toolbar>
                    <IconButton onClick={handleDrawerOpen}>
                        <MenuIcon className={clsx(classes.icon, open && classes.hide)} />
                    </IconButton>
                    <Typography className={classes.appbarTitle}>bangkok university</Typography>
                    
                    <IconButton>
                        <SettingsIcon className={classes.icon}/>
                    </IconButton>

                    <IconButton>
                        <Link to="/aboutme"><SettingsIcon className={classes.icon}/></Link>
                    </IconButton>

                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <AccountCircleIcon className={classes.icon} />
                        <Typography>Songphop Pornsiripiyakul</Typography>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.menuDropdowm}
                    >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"                
                open={open}
                variant="persistent"
                className={classes.drawer}
            >
                <Menubar handleDrawerClose={handleDrawerClose} />
            </Drawer>
            <div         
                className={clsx(classes.content, {
                [classes.contentShift]: open
            })}>
            <div className={classes.drawerHeader} />
            <Switch>
              <Route exact path="/home"><Home/></Route>
              <Route exact path="/aboutme"><Aboutme/></Route>
            </Switch>
            </div>
    </div>
  );
}