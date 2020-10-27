import axios from 'axios';

<<<<<<< HEAD
export async function FetchDht(){
   let url='https://smarthome-bu.online/sensor_DHT11List';
   const res = await axios.get(url)
   return res.data
  }


export async function FetchDhtList(){
    const TempList = []
    const HumidityList =[]
    const TimeList =[]
    let url='https://smarthome-bu.online/sensor_DHT11List';
    const res = await axios.get(url)
    for(let i=0; i<7 ; i++){
      TempList.push(res.data[i].Temperature)
      HumidityList.push(res.data[i].Humidity)
      TimeList.push(res.data[i].Time)
    }
    const data = {
      TempList,
      HumidityList,
      TimeList
    }
    return data
  }
=======
export async function AxiosWeather() {
  var url='https://smarthome-bu.online/sensor_DHT11List';
  const Weather = await axios.get(url)
  return Weather.data
}
export async function AxiosWeather10() {
  var t=[]
  var h=[]
  var d=[]
  var url='https://smarthome-bu.online/sensor_DHT11List';
  const Weather = await axios.get(url)
   for (let i = 0; i < 7; i++) {
      t.push(Number(Weather.data[i].Temperature))
      h.push(Number(Weather.data[i].Humidity))
      d.push(Weather.data[i].Date)
    }
   var data ={
    Temperature:t,
    Humidity:h,
    Date:d
   } 
  return data
}
>>>>>>> 52bbe7bf7427555f6e4c648231c23c621d4ec3a9
