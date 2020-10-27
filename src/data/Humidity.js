import React , {useState , useEffect} from 'react'
<<<<<<< HEAD
import {FetchDht} from '../function/service'

function Humidity() {

    const [humidity, setHumidity] = useState(0)


    useEffect(() => {
        const data = FetchDht()
        data.then(item=>{
            setHumidity(item[0].Humidity)
        })
    }, [])
    return (
        <div>
            {humidity}
        </div>
    )
}

export default Humidity
=======
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


>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
