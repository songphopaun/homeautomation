import React , {useState , useEffect} from 'react'
import Home from '../components/Home'
import {Fetchdht} from '../function/service'

function DHT11(props) {
  
  const [temp, setTemp] = useState(0)

  useEffect(() => {
    Fetchdht()
    // console.log(data)
    return () => {
      console.log("un")
    }
  }, [])


  return (
    <div>
      <Home/>
      {/* <span>{props.data}</span> */}
    </div>
  )
}


export default DHT11


