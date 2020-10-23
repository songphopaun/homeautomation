import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Appbar from './components/Appbar'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor:'#f4f3ef',
    margin:'0',
    padding:'0'
  },
}));

export default function App() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
        <Appbar/> 
    </div>
  )
}
