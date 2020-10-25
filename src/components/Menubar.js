import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import * as Icons from "@material-ui/icons";
import { DataLink } from "../data/Datalink";

const useStyles = makeStyles((theme) => ({
  menubar: {
    fontFamily: "Nunito",
    textTransform: "uppercase",
    height: "100%",
    width: "230px",
    background: "#343A40",
      // display: "flex",
    [theme.breakpoints.down("sm")]:{
      width: "60px",
    }
  },
  menubarBrand: {
    color: "#fff",
    fontSize: "1rem",
    letterSpacing: "3px",
    position: "absolute",
    top: "20px",
    left: "30px",
    borderBottom: "1px solid white",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]:{
      left: "20px",
    }
  },
  menubarBrandText:{
    [theme.breakpoints.down("sm")]:{
      display:'none'
    }
  },
  menubarHeader: {
    position: "absolute",
    top: "60px",
    left: "-10px",
    [theme.breakpoints.down("sm")]:{
      left: "-20px",
    }
  },
  menubarUI: {
    listStyle: "none",
    lineHeight: "350%",
  },
  menubarlink: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    letterSpacing: "2px",
    "&:hover": {
      color: "#51BCDA",
    },
  },
  menubarTitle:{
    [theme.breakpoints.down("sm")]:{
     display:'none'
    }
  },
  menubarIcon: {
    marginRight: "10px",
    position: "relative",
    top: "5px",
  },
  iconBack: {
    color: "#fff",
    padding: " 4px",
    marginLeft: "200px",
    position: "relative",
    top: "8px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]:{
      marginLeft: "40px",
      top: "2px",
    }
  },
}));

export default function Menubar(props) {
  const classes = useStyles();

  return (
    <div className={classes.menubar}>
      <i onClick={props.handleDrawerClose}>
        <Icons.ArrowBackIos className={classes.iconBack} />
      </i>
      <span className={classes.menubarBrand}>
        <Icons.EmojiEvents /><span className={classes.menubarBrandText}>Smarthome</span>
      </span>
      <div className={classes.menubarHeader}>
        <ul className={classes.menubarUI}>
          {DataLink.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={classes.menubarlink}>
                  <i className={classes.menubarIcon}>
                    {item.icons}
                  </i>
                <span className={classes.menubarTitle}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
