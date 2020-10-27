import axios from 'axios';

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