<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { AxiosWeather10 } from "../function/service";
export default function ChartTemp(props) {
  const [Temperature, setTemperature] = useState([])
  const [Humidity, setHumidity] = useState([])
  //const [Time, setTime] = useState([])
  
  useEffect(() => {
    const Weather=AxiosWeather10();
  // function ดึงข้อมูลมาจาก service
    Weather.then(item=>{
      setTemperature(item.Temperature)
      setHumidity(item.Humidity)
      //setTime(item.Date)
    })
  }, [])
 
  const series = [
    {
      name: "Temperature",
      data: Temperature,
    },
    {
      name: "Humidity",
      data: Humidity,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
}
