import axios from 'axios';

export function Fetchdht(){
   let url='https://smarthome-bu.online/sensor_DHT11List';
   const data=[]
    axios.get(url).then(res => {
        data.push(res.data[0])
        console.log(data)
      })
      return data
}
export function Fetchdhtlineone(){
    let url='https://smarthome-bu.online/sensor_DHT11List';
    const data=[]
    axios.get(url)
      .then(res => {
        data.push(res.data)
      })
      return data
}