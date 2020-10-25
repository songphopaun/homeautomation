import React , {useState , useEffect} from 'react'
// import Home from '../components/Home'
import {AxiosWeather} from '../function/service'

function Humidity() {
  
  const [Humidity, setHumidity] = useState(0)

  useEffect(() => {
    const Weather=AxiosWeather();
  // function ดึงข้อมูลมาจาก service
    Weather.then(item=>{
      setHumidity(item[0].Humidity)
    })
  }, [])
  //console.log("Humidity",Humidity)

  return (
    <>
      {Humidity}
    </>
  )
}


export default Humidity


