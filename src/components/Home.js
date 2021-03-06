import React , {useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {RiTempHotLine } from 'react-icons/ri'
import {WiHumidity ,WiDust} from 'react-icons/wi'
import Temp from '../data/Temp'
import Humidity from '../data/Humidity'
import ChartTemp from '../data/ChartTemp'
import Temperature from '../data/Temperature'
import Humidity from '../data/Humidity'


import {getDHT} from '../redux/action/action'
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:'30px',
    marginRight:'30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height:'100px',
    borderRadius:'10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition:'0.5s ease',
    cursor:'pointer',
    "&:hover":{
      transform:'scale(1.05)',
      boxShadow: '5px 5px 5px rgba(0,0,0,0.3)'
    },
  },
  homeText:{
    float: 'right',
    color:'#999999'
  },
  homeTextProps:{
    float: 'right',
    fontSize:"2rem",
    color:'#3C4858',
  },
  homeBoxTemp:{
    position:'relative',
    float:'left',
    top:'-30px',
    width:'100px',
    height:'100px',
    margin:'0',
    background:'linear-gradient(60deg,#26c6da,#00acc1)',
    borderRadius:'5px',
  },
  homeBoxHumidity:{
    position:'relative',
    float:'left',
    top:'-30px',
    width:'100px',
    height:'100px',
    margin:'0',
    background:'linear-gradient(60deg,#66bb6a,#43a047)',
    borderRadius:'5px',
  },
  homeBoxIcon:{
    width:'45px',
    height:'45px',
    margin: '27px',
    color:'#fff'
  },
  paperChart:{
    padding: theme.spacing(2),
    borderRadius:'10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
  }



}));

function Home(props) {
  const classes = useStyles();


  useEffect(() => {
    props.getDHT()
    console.log("object")
    return () => {
        console.log('Unmount')
    }
  },)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
<<<<<<< HEAD
            <span className={classes.homeText}>Temperature<br/><span className={classes.homeTextProps}>{props.temp}</span></span>
=======
            <span className={classes.homeText}>Temperature<br/><span className={classes.homeTextProps}><Temp/></span></span>
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
            <span className={classes.homeBoxTemp}><RiTempHotLine className={classes.homeBoxIcon}/></span>            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
<<<<<<< HEAD
            <span className={classes.homeText}>Humidity<br/><span className={classes.homeTextProps}>{props.humi}</span></span>
=======
            <span className={classes.homeText}>Humidity<br/><span className={classes.homeTextProps}><Humidity/></span></span>
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
            <span className={classes.homeBoxHumidity}><WiHumidity className={classes.homeBoxIcon}/></span>            
          </Paper>        
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
            <span className={classes.homeText}>Humidity<br/><span className={classes.homeTextProps}>10</span></span>
            <span className={classes.homeBoxHumidity}><WiDust className={classes.homeBoxIcon}/></span>            
          </Paper>         </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
            <span className={classes.homeText}>Humidity<br/><span className={classes.homeTextProps}>50</span></span>
            <span className={classes.homeBoxHumidity}><WiHumidity className={classes.homeBoxIcon}/></span>            
          </Paper>         </Grid>
<<<<<<< HEAD
        <Grid item xs={12} sm={6} md={6} lg={8}>
          {/* <Paper className={classes.paperChart}><ChartTemp /></Paper> */}
=======
        <Grid item xs={12} sm={6} md={6} lg={12}>
          <Paper className={classes.paperChart}><ChartTemp /></Paper>
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
      temp:state.temp,
      humi:state.humi,    
      // time:state.time
  }
}
export default connect(mapStateToProps,{getDHT})(Home)
