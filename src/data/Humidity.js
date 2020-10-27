import React , {useState , useEffect} from 'react'
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