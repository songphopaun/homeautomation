import React , {useState , useEffect} from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'
import {getDHT } from '../actions/app.action'

function DHT11(props) {

  useEffect(() => {
    props.getDHT()
    console.log("555")
    return () => {
        console.log('Unmount')
    }
  },)


  return (
    <div>
            <Home temp={props.temp} humidity={props.humidity} xx={[9,5,10,55]}/>
            {props.temp}<br/>
            {props.humidity}<br/>
            {props.time}<br/>
            {props.x}<br/>


    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
      temp:state.temperature,
      humidity:state.humidity,    
      time:state.time,
      x:state.x
  }
}

export default connect(mapStateToProps,{getDHT})(DHT11)


