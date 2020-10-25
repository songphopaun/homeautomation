import axios from 'axios';

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