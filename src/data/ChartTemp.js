import React , {useState , useEffect} from 'react'
import Chart from "react-apexcharts";
import {FetchDhtList} from '../function/service'

export default function ChartTemp() {


    const [temp, setTemp] = useState([])
    const [humidity, setHumidity] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
      const data = FetchDhtList()
      data.then(item=>{
        setTemp(item.TempList)
        setHumidity(item.HumidityList)
        setTime(item.TimeList)
      })
    }, [])


     const series = [{
        name: 'Temperature',
        data: temp
      }, {
        name: 'Humidity',
        data: humidity
    }]
    
     const  options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["22:53:48", "22:44:39", "21:57:25", "21:56:25", "21:55:55", "21:55:25", "21:54:55"],        
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    }
    
    return (
        <div>
                <Chart options={options} series={series} type="area" height={350}  />
                {console.log(time)}
        </div>
    )
}
