import React , {useState , useEffect} from 'react'
// import Home from '../components/Home'
import {AxiosWeather} from '../function/service'

function Temp() {
  
  const [temp, settemp] = useState(0)

  useEffect(() => {
    const Weather=AxiosWeather();
  // function ดึงข้อมูลมาจาก service
    Weather.then(item=>{
      settemp(item[0].Temperature)
    })
  }, [])
  //console.log("temp",temp)

  return (
    <>
      {temp}
    </>
  )
}


export default Temp


