import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HomeIcon from '@material-ui/icons/Home';
import KingBedIcon from '@material-ui/icons/KingBed';
import KitchenIcon from '@material-ui/icons/Kitchen';
import BathtubIcon from '@material-ui/icons/Bathtub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';




const useStyles = makeStyles((theme) => ({

    menubar:{
        fontFamily : 'Nunito',
        textTransform:"uppercase",
        height:'100%',
        width:'230px',
        background: '#343A40',
        display:'flex',
    },
    menubarBrand:{
        color:'#fff',
        fontSize : '1rem',
        letterSpacing :'3px',
        position:'absolute',
        top:'20px',
        left : '30px',
        borderBottom:'1px solid white',
        paddingBottom: '10px'
    },
    menubarHeader:{
        position:'absolute',
        top:'60px',
        left:'-10px'
    },
    menubarUI:{
        listStyle: 'none',
        lineHeight:'350%',
    },
    menubarlink:{
        textDecoration: 'none',
        color : '#fff',
        cursor:'pointer',
        fontSize : '1rem',
        letterSpacing :'2px',
        "&:hover":{
            color:'#51BCDA'
        }
    },
    menubarIcon:{
        marginRight:'10px',
        position:'relative',
        top:'5px'
    },
    iconBack:{
        color:'#fff',
        padding:' 4px',
        marginLeft: '200px',
        position:'relative',
        top:'8px',
        cursor:'pointer'
    }

}));

export default function Menubar(props) {
    const classes = useStyles();

    return (
        <div className={classes.menubar}>
            <i onClick={props.handleDrawerClose}><ArrowBackIosIcon className={classes.iconBack}/></i>
            <span className={classes.menubarBrand}><EmojiEventsIcon/> Smarthome  </span>
            <div className={classes.menubarHeader}>
                <ul className={classes.menubarUI}>
                    <li>
                        <Link to="/home" className={classes.menubarlink}><i className={classes.menubarIcon}><HomeIcon/></i>Home</Link>
                    </li>
                    <li>
                        <Link to="/bedroom" className={classes.menubarlink}><i className={classes.menubarIcon}><KingBedIcon/></i>Bedroom</Link>
                    </li>
                    <li>
                        <Link to="/kitchen" className={classes.menubarlink}><i className={classes.menubarIcon}><KitchenIcon/></i>Kitchen</Link>
                    </li>
                    <li>
                        <Link to="/bathroom" className={classes.menubarlink}><i className={classes.menubarIcon}><BathtubIcon/></i>Bathroom</Link>
                    </li>
                    <li>
                        <Link to="/livingroom" className={classes.menubarlink}><i className={classes.menubarIcon}><LiveTvIcon/></i>living room</Link>
                    </li>
                    <li>
                        <Link to="/account" className={classes.menubarlink}><i className={classes.menubarIcon}><LiveTvIcon/></i>living room</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}
