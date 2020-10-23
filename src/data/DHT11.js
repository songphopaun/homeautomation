import React , {useState , useEffect} from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'
import {getDHT} from '../actions/app.action'

function DHT11(props) {
 

  useEffect(() => {
      props.getDHT()
    return () => {
        console.log('Unmount')
    }
  },)

  return (
    <div>
            <Home temp={props.temp} humidity={props.humidity}/>
            {props.temp}<br/>
            {props.humidity}<br/>
            {props.time}<br/>

    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
      temp:state.temperature,
      humidity:state.humidity,    
      time:state.time
  }
}

export default connect(mapStateToProps,{getDHT})(DHT11)
