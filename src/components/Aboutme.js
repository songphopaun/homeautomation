import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import minimal from '../Img/mimimal.jpg'

import {RiFacebookCircleFill } from 'react-icons/ri'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
  cardProfile:{
      textAlign:'center',
      borderRadius:'8px',
      overflow:'hidden'
  },
  cardHeader:{
      background:"#2c3a47",
      padding:'40px 40px'
  },
  cardPic:{
      display:'inline-block',
      padding:'8px',
      background:'linear-gradient(130deg, #74b9ff, #e66767)',
      margin:'auto',
      borderRadius:'50%',
      backgroundSize:'200% 200%',
      animation:`$myEffect 2s linear infinite`,
  },
  "@keyframes myEffect":{
      "25%":{
          backgroundPosition: 'left bottom'
      },
      "50%":{
          backgroundPosition: 'right bottom'
      },
      "75%":{
          backgroundPosition: 'right top'
      },
       "100%":{
          backgroundPosition: 'left top'
      },
  },
  cardPicImg:{
    display:'block',
    width:'150px',
    height:'150px',
    borderRadius:'50%'
  },
  cardName:{
      color:'#f2f2f2',
      fontSize:'28px',
      fontWeight:'600',
      margin:'10px 0'
  },
  cardDesc:{
      fontSize:'23px',
      color:'#51BCDA'
  },
  cardIcon:{
      display:'flex',
      justifyContent:'center',
      margin:'20px 0'
  },
  cardIconIcon:{
      color:'#f2f2f2',
      width:'56px',
      fontSize:'40px',
      transition: '.3s linear',
      "&:hover":{
        color:'#51BCDA',
        cursor:'pointer'
      },
  },
  cardFooter:{
      background:'#fff',
      padding:'60px 10px'
  }

}));

export default function Aboutme() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop Pornsiripiyahul</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop Pornsiripiyahul</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardHeader}>
                        <div className={classes.cardPic}>
                            <img src={minimal} alt="" className={classes.cardPicImg}/>
                        </div>
                        <div className={classes.cardName}>Songphop</div>
                        <div className={classes.cardDesc}>Developer</div>
                        <div className={classes.cardIcon}>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                            <RiFacebookCircleFill className={classes.cardIconIcon}/>
                        </div>
                    </div>
                    <div className={classes.cardFooter}>
                        <sapn>asd</sapn>
                    </div>
                </div>
            </Paper>
        </Grid>
        </Grid>
     </div>
  );
}
