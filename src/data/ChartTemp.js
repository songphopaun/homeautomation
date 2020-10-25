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
}
